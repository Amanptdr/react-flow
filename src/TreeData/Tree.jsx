
import React, {useState,useEffect} from 'react'
import './tree.css';

const treeData = [
    {
        id : '1',
        text : 'xdbcjhsdvjcsdf',
        diamond: false,
        children:[
            {
                id:'2',
                text:'dvdfjvbfd',
                diamond: false,
                children:[
                    {
                        id:'2.1',
                        text:'jkvbdfhv',
                        diamond: false,
                        children:[]
                    },
                    {
                        id:'2.2',
                        text:'grgrgrefg',
                        diamond: false,
                        children:[]
                    }
                ]
            }, 
            {
                id:'3',
                text:'dvdfjvbfd',
                diamond: false,
                children:[
                    {
                        id:'3.1',
                        text:'jkvbdfhv',
                        diamond: false,
                        children:[]
                    },
                    {
                        id:'3.2',
                        text:'grgrgrefg',
                        diamond: false,
                        children:[]
                    }
                ]
            },
            {
                id:'4',
                text:'dvdfjvbfd',
                diamond: false,
                children:[]
            }
        ]
    }
]

const TreeData = () => {
    
    const [state, setstate] = useState([]);
    // useEffect(() => {
    //     mapTree(treeData, state, setstate);
    // }, [])
    // useEffect(() => {
    //     console.log(state)
    // }, [state])
    // let arr = []
    // const mapTree = (treeData) =>{
    //     treeData.forEach((ele)=>{
    //         console.log(ele, state);
    //         setstate([...state, ele])
    //         arr.push(ele);
    //         const children = ele.children && JSON.parse(JSON.stringify(ele.children));
    //         delete ele.children && ele['children'];
    //         if(children && children.length){
    //             return mapTree(children)
    //         }
    //     })
    // }
    // console.log(arr)
    return (
<div className="tree">
    {
        treeRendering(treeData)
    }
	{/* <ul>
		<li>
            <div><input type="checkbox"/> Main <br/> <button> Test Btn </button></div>
            <ul>
                <li>
                      <div>wqhdveghdf</div>

                </li>
                <li>
                    <div>efjejfg</div> 
                    <ul>
                      <li>
                            <div>wqhdveghdf</div>
      
                      </li>
                      <li>
                          <div>efjejfg</div> 
                          <ul>
                            <li>
                                  <div>wqhdveghdf</div>
                                  <ul>
                                    <li>
                                          <div>wqhdveghdf</div>
                    
                                    </li>
                                </ul>
            
                            </li>
                            <li>
                                <div>efjejfg</div> 
                                <ul>
                                  <li>
                                        <div>wqhdveghdf</div>
                  
                                  </li>
                              </ul>
                            </li>
                        </ul>
                      </li>
                  </ul>
                </li>
            </ul>
                        
		</li>
	</ul> */}
                    
</div>
    )
}

const TestFunction =(data)=>{
    console.log(data)
    let temp = {
        id:Number(data.id)+1,
        text:'NEW ONE',
        diamond: false,
        children:[]
    }
    data.children.push(temp);
    console.log(data,"2222")
}
const treeRendering = (treeData) => {
    
    return (
        <>
                <ul>
            {
                treeData.map((item)=>                
                    <li className={item.text+item.id}>
                        <div>{ item.text}</div><button onClick={(e)=>TestFunction(item)}>Add</button>
                        {
                            item.children && item.children.length ?
                            treeRendering(item.children)
                            :''
                        }
                    </li>
                )            
                
            }
            </ul>
        </>
    )
}


export default TreeData