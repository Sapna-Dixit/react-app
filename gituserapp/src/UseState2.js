import React,{useState} from 'react'

const UseState2 = () =>{
    const[count,setCount] = useState(0)
    return(
      <div>
          <h1>Hello React useState Hook.</h1>
          <p>{count}</p>
          <button onClick={()=>setCount(count+1)}>Inc</button>&nbsp;&nbsp;&nbsp;
          <button onClick={()=>setCount(count-1)}>Dec.</button>
      </div>
    )
}
export default UseState2;