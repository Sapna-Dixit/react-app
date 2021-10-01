import React from 'react'

const UseStateObject = ()=>{
    const[myObject,  setMyObject] = React.useState({
        myName:"Smith", age:27,degree:"MCA"
    })
    const changeObject = ()=>{
        setMyObject({...myObject,myName:"Andrew Anderson"})
    }
    return(
        <div>
            <h1 className ="h1Style">Name : { myObject.myName} & age :{myObject.age} 
            & Degree :{myObject.degree}</h1>
        <button onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject;