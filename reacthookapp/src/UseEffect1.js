import React, { useState,useEffect }  from 'react'

const UseEffect1=()=>{
    const[count, setCount]= useState(0);
   
    useEffect(()=>{

       console.log("Hello  I am first  one.")
       
       if(count>=1)
       {
        document.title =`Chat (${count})`
       }
       else
       {
           document.title =`Chat`
       }
    },[count])

    useEffect(()=>{
        console.log("I am fine..!!!");

    },[])
   console.log("Hello outside..!!!");
    return(
        <div>
            <h1>Hello React..!!!{count}</h1>
            
            <button className="btn" onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
export default UseEffect1;