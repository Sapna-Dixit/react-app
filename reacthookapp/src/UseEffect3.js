import React,{useState} from 'react';
import useTitleCount from './useTitleCount'

const UseEffect3 = ()=>{
    const[count,setCount] = useState(0)
    useTitleCount(count)
 //custom Hook example 
    console.log("Hello outside..!!!")

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
export default UseEffect3;