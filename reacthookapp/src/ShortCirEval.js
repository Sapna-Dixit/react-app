import React from 'react'

const ShortCirEval =()=>{
    const[demo,setDemo] = React.useState("")

    return(
        <h1 className="h1Style">{demo ||"Technical"}</h1>
      
    )
}
export default ShortCirEval;