import { useCallback } from 'react';
import { Handle, Position, NodeToolbar } from 'reactflow';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
const handleStyle = { left: 10 };

function MainMessage(props) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="rectangle">
        <div id="myFirstDialog" style={{ width: '200px', height: '200px', backgroundColor:props?.data?.is_trigger?'yellow':'skyblue', border: '1px dotted black', }}>
        <header>{props?.data?.level}</header>
        {
          props?.data?.content?.type === 'text' &&
          <div>
            <label>Message Type</label>:<b>{props?.data?.content?.type}</b><br/>
            <label>Message</label>:<b>{props?.data?.content?.text}</b>
          </div>
        }
        {
          props?.data?.content?.type === 'quick_reply' &&
          <div>
            <label>message_type</label>:<b>{props?.data?.content?.type}</b><br/>
            <label>Message</label>:<b>{props?.data?.content?.text}</b><br/>
            <label>URl</label>:<b>{props?.data?.content?.url}</b><br/>
            <label>OPTIONS</label>:{props?.data?.content?.options &&
            props?.data?.content?.options.map((item,index)=>{
            return (<> {index+1}:<b key={index}>{item.title}</b><br/></>)
            })
            }
          </div>
        }
        {
          props?.data?.content?.type === 'file' &&
          <div>
            <label>message_type</label>:<b>{props?.data?.content?.type}</b><br/>
            <label>Url</label>:<b>{props?.data?.content?.url}</b><br/>
          </div>
        }
        {
          props?.data?.is_trigger === 'yes' &&
          <div>
            <label>Auto Trigger</label>:<b>{props?.data?.is_trigger}</b><br/>
          </div>
        }
      </div>
      <Handle type="target" position={props?.data?.is_trigger?Position.Top:Position.Top} />
      <Handle type="source" position={props?.data?.is_trigger?Position.Bottom:Position.Bottom} id="b" />
    </div>
  );
}

export default MainMessage;


const CustomNode = ({ data }) => {
  const { project } = useReactFlow();
  function deleteNode(data) {
    console.log(data, "data")
  }
  const addNewNode = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');
      console.log(event.target.classList.contains('react-flow__pane'))

      // if (targetIsPane) {
      //   // we need to remove the wrapper bounds, in order to get the correct position
      //   const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      //   const id = getId();
      //   const newNode = {
      //     id,
      //     // we are removing the half of the node width (75) to center the new node
      //     position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
      //     data: { label: `Node ${id}` },
      //   };

      //   setNodes((nds) => nds.concat(newNode));
      //   setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
      // }
    },
    [project]
  );
  return (
    <>
      <NodeToolbar isVisible={data?.toolbarVisible} position={data?.toolbarPosition}>
        <button onClick={(e) => deleteNode(data)}>delete</button>
        <button onClick={(e) => addNewNode(e)}>copy</button>
        <button>expand</button>
      </NodeToolbar>
      {/* <div style={{ padding: '10px 20px' }}>{data?.label}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} /> */}
    </>
  );
};
export { CustomNode };

