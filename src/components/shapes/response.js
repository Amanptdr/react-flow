import { useCallback, useState, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { NEWBOT, newBotEdges, EdgesId } from './botData';
import { useRecoilState } from 'recoil';
import { MarkerType } from "reactflow";
import ReactFlow, { addEdge, useReactFlow, applyEdgeChanges, applyNodeChanges, ReactFlowProvider } from 'reactflow';

const handleStyle = { left: 10 };

function Responses(props) {
    const parentNode = props;
    const [bot, setBot] = useRecoilState(NEWBOT);
    const [edges, setEdges] = useRecoilState(newBotEdges)
    const reactFlowWrapper = useRef(null);
    const [edges_Id, setEdgesId] = useRecoilState(EdgesId)
    let id = edges_Id;
    const { project } = useReactFlow();
    const getId = () => `${id++}`;
    const addNewNode = (event, data) => {
        console.log(event, data)
    }
    const onConnectEnd = useCallback(
        (event, node) => {
            console.log(node)
            const targetIsPane = event.target.classList.contains('react-flow__pane');
            if (!targetIsPane) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
                const id = String(parseInt(Math.random(100000000) * 1000000))
                // const id = getId()
                alert(id)
                const newNode = {
                    id: id,
                    // we are removing the half of the node width (75) to center the new node
                    type: 'response',
                    position: { x: 0, y: 0 },
                    // position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
                    data: { label: `Node ${id}` },
                };

                setBot((nds) => nds.concat(newNode));
                console.log(bot, "111")
                let temp = Number(id) + 1;
                setEdgesId(temp)
                setEdges((eds) => eds.concat({
                    id,
                    source: node?.id,
                    target: id,
                    type: 'step',
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        labelBgBorderRadius: 100
                    },
                    label: '',
                }));
            }
        },
        [project]
    );

    const handleChangeText = (e, node) => {
        console.log(bot)
        console.log(e.target.value, node)
    }
    const selectMessageType = (e, node) => {
        let newList = bot.map((item) => {
            if (item.id == node.id) {
                return { ...item, messageType: e.target.value }
            }
            else return item;
        })
        setBot(newList)
        console.log(node)
    }
    const [optionsArray,setOptionsArray] = useState([])
    const [optionValue,setOptionValue] = useState('');
    const optionName = (e, node) => {
        setOptionValue(e.target.value)
    }
    const addItems =(id)=>{
        setOptionsArray([...optionsArray,optionValue])
        console.log(optionsArray,"optionsArray")
        setOptionValue('')
    }
    return (
        <div className="rectangle" ref={reactFlowWrapper}>
            <div id="myFirstDialog" style={{ width: '200px', height: '200px', backgroundColor: 'skyblue', border: '1px dotted black', }}>
                <label>message_type</label>
                <select onChange={(e) => { selectMessageType(e, parentNode) }}>
                    <option value={'text'}>Text</option>
                    <option value={'options'}>Options</option>
                    <option value={'list'}>List</option>
                </select>
                <label>Message</label>:<input type='text' onChange={(e) => { handleChangeText(e, parentNode) }} />
                <button onClick={(e) => onConnectEnd(e, parentNode)}>Add</button>
                <button>DELETE</button>
                <button>EDIT</button>

            {bot[0].messageType === 'options' &&
                <div>
                    <label>Enter</label>:<input type='text'  value={optionValue} onChange={(e) => { optionName(e, parentNode) }} />
                    <button onClick={(e)=>{addItems(parentNode.id)}}>add</button>
                </div>
            }
            </div>
            <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />

            <Handle type="source" position={Position.Bottom} id={parentNode.id} className="w-16 !bg-teal-500" />
        </div>
    );
}

export default Responses;