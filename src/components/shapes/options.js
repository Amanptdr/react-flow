import { useCallback } from 'react';
import { Handle, Position, NodeToolbar } from 'reactflow';
const handleStyle = { left: 10 };

function Options({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);
    function deleteNode(data) {
        console.log(data, "data")
    }
    return (
        <div className="rectangle">
            <NodeToolbar isVisible={data?.toolbarVisible} position={data?.toolbarPosition}>
                <button onClick={(e) => deleteNode(data)}>delete</button>
                <button>copy</button>
                <button>expand</button>
            </NodeToolbar>
            <Handle type="target" position={Position.Top} />
            <div id="myFirstDialog" style={{ width: '100px', height: '100px', backgroundColor: 'skyblue', border: '1px dotted black', }}>
                {data.text}
                <button>Yes</button>
                <button>No</button>
            </div>
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
    );
}

export default Options;