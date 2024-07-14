import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    return ( 
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>Click</button>
            <span>{count}</span>
        </div>
    )
}