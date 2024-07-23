import React from "react";


//get input from user and print it on screen

export default function Input(){
    const [data,setData] = React.useState(null)
    const [print,setprint] = React.useState(false)

    function getdata(val){
        setData(val.target.value)
        setprint(false)
    }

    return(
        <div>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            
            <input type='text' onChange={getdata}></input>
            <button onClick={()=>setprint(true)} >print data</button>
        </div>
    )

} 


//hide,show,toggle component/div

function Tog(){
    const[status,setStatus]=React.useState(false)
    return(
        <div>
            {
                status? <h1>hello world</h1>:null
            }
            <button onClick={()=>setStatus(false)}>hide</button>
            <button onClick={()=>setStatus(true)}>show</button>
            <button onClick={()=>setStatus(!status)}>toggle</button>
        </div>
    )
}