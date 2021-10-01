import React,{useState} from 'react'

const RulesHooks =()=>
{
  const[myName, setMyName] = useState("React");
    return(
        <div>
            <h1>{ myName }</h1>
        </div>
    )

}
export default RulesHooks;