import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, ReactFlowProvider } from 'reactflow';
// import Circle from './TextUpdaterNode.js';
// import Triangle from './TringleNode.js';
// import Trapezoid from './Trapezoid.js';
import MainMessage from './rectangle.js';
import Responses from './response';
import Options from './options';
import 'reactflow/dist/style.css';
import { bot2 } from './botData.js';
import { useRecoilState } from 'recoil';
// import './text-updater-node.css';
import { MarkerType } from "reactflow";

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { MainMessage: MainMessage,response:Responses,option:Options };

function ShapeFlow() {
  const [btnArray, setBtnArray] = useState([])
  const [botNodes,setBotNodes] = useRecoilState(bot2)
  let newData = botNodes.levels.map((item) => ({
    ...item,
    id: item.level,
    type: 'MainMessage',
    data:item,
  }));
  
  const initialNodes = [
    { id: 'node-1', type: 'MainMessage', position: {x: -91.5, y: -57},positionAbsolute: {x: -91.5, y: -57},sourcePosition:'top',  data: { value: 123, text: 'sdchgdvshgcvsd', btn: <button onClick={(e) => { handleSetbtnArray(); }}>Click me</button>, btnArray: btnArray } },
    { id: 'node-2', type: 'response', position: {x: 21.328172531672763, y: -92.11253614736108}, data: { value: 123, text: 'sdchgdvshgcvsd' } },
    { id: 'node-3', type: 'option', position: {x: 58.5, y: 103},positionAbsolute: {x: 58.5, y: 103}, data: { value: 123, text: 'painting' } },
    { id: 'node-4', type: 'option', position: {x: -108.5, y: 103.5},positionAbsolute: {x: -108.5, y: 103.5}, data: { value: 123, text: 'Survay' } },
    { id: 'node-5', type: 'option',  position: {x: 270.5, y: 103.5},positionAbsolute: {x: 270.5, y: 103.5}, data: { value: 123, text: 'Education system' } },
  ];
  const initialEdges = [
    {
      id: '1', source: 'L0', target: 'L1', animated: false, type: 'step',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        labelBgBorderRadius: 100
      },
      label: '',
    },
    {
      id: '2', source: 'L1', target: 'L2', animated: false, type: 'step',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        labelBgBorderRadius: 100
      },
      label: '',
    },
    {
      id: '3', source: "L2", target:"L3", animated: false, type: 'step',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        labelBgBorderRadius: 100
      },
      label: '',
    },
    {
      id: '4', source: "L3", target: 'L4', animated: false, type: 'step',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        labelBgBorderRadius: 100
      },
      label: '',
    },
    {
      id: '5', source: "L4", target: 'L5', animated: false, type: 'step',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        labelBgBorderRadius: 100
      },
      label: '',
    },   
  ]
  const [nodes, setNodes] = useState(newData);
  const [edges, setEdges] = useState(initialEdges);

  const handleSetbtnArray = () => {
    setBtnArray((prev) => btnArray.push('scghsvdghsvc'));
    console.log(btnArray)
    setNodes([...nodes])
  }


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <ReactFlowProvider>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 3}}
      style={rfStyle}
    />
      </ReactFlowProvider>
  );
}

export default ShapeFlow;