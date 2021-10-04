import React, {useState,useEffect } from 'react'

const UseEffect2 = ()=>{
    const[widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = ()=>
    {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }

    useEffect(()=>{
        console.log("add Event..!!!")
        window.addEventListener("resize", actualWidth);

        
        return ()=>{
                console.log("remove Event...!!!")
            window.removeEventListener("resize", actualWidth);

        }
    })
    
    
    return(
        <div>
            <h1>Actual size of the window.</h1>
            <p>{widthCount}</p>
        </div>
    )
}
export default UseEffect2