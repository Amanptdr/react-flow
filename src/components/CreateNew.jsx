import { useCallback, useState, useEffect, useRef } from "react";
import ReactFlow, {
  addEdge,
  useReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,

} from "reactflow";
import Responses from "../components/shapes/response.js";
import MainMessage from "../components/shapes/rectangle.js";
import "reactflow/dist/style.css";
import { NEWBOT, newBotEdges, Dummy } from "./shapes/botData.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { Controls, MarkerType, MiniMap,Background } from "reactflow";
import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 250;
const nodeHeight = 250;
const reactFlowStyle = {
  background: "",
  width: 100,
  height: 300,
};

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { response: Responses, mainMessage: MainMessage };
function CreateNew() {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const { project } = useReactFlow();
  const [initialEdges, setInitialEdges] = useRecoilState(newBotEdges);
  const [initialNodes, setInitialNodes] = useRecoilState(NEWBOT);
  const [botData, setBotData] = useRecoilState(Dummy);
  const [nodes, setNodes] = useNodesState();
  const [edges, setEdges] = useEdgesState();
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getId = (i) => {
    return `${ids[i]}`;
  };
  const creteNodes = () => {
    let node = [];
    botData.levels.map((item, index) => {
      node.push({
        data: { ...item, is_trigger: false },
        type: "mainMessage",
        id: getId(index),
        sourcePosition: "right",
        targetPosition: "left",
        position: { x: 0, y: 0 },
      });
      if (item.is_trigger === "yes") {
        node.push({
          data: {
            ...item,
            is_trigger: true,
            level: item?.level + "Auto Trigger",
          },
          type: "mainMessage",
          sourcePosition: "right",
          targetPosition: "left",
          parent: getId(index),
          id: "trigger-" + item.level,
          position: { x: 0, y: 0 },
        });
      }
    });
    // setInitialNodes(node);
    setNodes(node);
    let edge = [
      {
        id: "1",
        source: "1",
        target: "2",
        animated: false,
        type: "step",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          color: "#0556f3",
          width: 20,
          height: 20,
        },
        style: {
          strokeWidth: 2,
          stroke: "#0556f3",
        },
      },
      {
        id: "T1",
        source: "1",
        target: "trigger-L0",
        animated: false,
        type: "step",
        label: "Trigger",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          width: 20,
          height: 20,
          color: "#FF0072",
        },
        style: {
          strokeWidth: 2,
          stroke: "#FF0072",
        },
      },
      {
        id: "T2",
        source: "3",
        target: "trigger-L2",
        animated: false,
        type: "step",
        label: "Trigger",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          width: 20,
          height: 20,
          color: "#FF0072",
        },
        style: {
          strokeWidth: 2,
          stroke: "#FF0072",
        },
      },
      {
        id: "2",
        source: "2",
        target: "3",
        animated: false,
        type: "step",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          color: "#0556f3",
          width: 20,
          height: 20,
        },
        style: {
          strokeWidth: 2,
          stroke: "#0556f3",
        },
      },
      {
        id: "3",
        source: "3",
        target: "4",
        animated: false,
        type: "step",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          color: "#0556f3",
          width: 20,
          height: 20,
        },
        style: {
          strokeWidth: 2,
          stroke: "#0556f3",
        },
      },
      {
        id: "4",
        source: "1",
        target: "trigger-L3",
        animated: false,
        type: "step",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          color: "#FF0072",
          width: 20,
          height: 20,
        },
        style: {
          strokeWidth: 2,
          stroke: "#FF0072",
        },
      },
      {
        id: "5",
        source: "2",
        target: "5",
        animated: false,
        type: "step",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          labelBgBorderRadius: 100,
          color: "#0556f3",
          width: 20,
          height: 20,
        },
        style: {
          strokeWidth: 2,
          stroke: "#0556f3",
        },
      },
    ];
    // setInitialEdges(edge);
    setEdges(edge);
    console.log(edge, node);
    getLayoutedElements(node, edge);
  };
  useEffect(() => {
    creteNodes();
  }, []);
  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) =>{
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const getLayoutedElements = (nodes, edges, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };

      setNodes({ ...node, targetPosition: isHorizontal ? "left" : "top" });
    });
    setNodes(nodes);
    setEdges(edges);
    console.log(nodes, edges);
    return { nodes, edges };
  };
  // const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  //   initialNodes,
  //   initialEdges
  // );

  return (<>
   <div style={{ height: 1500 }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 3 }}
        style={reactFlowStyle}
      >
      </ReactFlow>
      {/* <MiniMap />
      <Controls /> */}
      <Background />
    </div>
  </>
   
  );
}

// export default CreateNew;
export default () => (
  <ReactFlowProvider>
    <CreateNew />
  </ReactFlowProvider>
);
