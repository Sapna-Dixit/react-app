import React,{useState} from 'react'

const UseStateArray= ()=>{

    const myBioData =[
        {id:1,name:"Ramlal", age : 25},
        {id:2,name:"Shamlal",age :26}
    ]
    const[myArray, setMyArray] = useState(myBioData);

    const  clearArray=()=>{
        setMyArray([]);
    }
    return(
        <>
           {
               myArray.map((curEle)=><h1 className ="h1Style" key = {curEle.id}>Name:{curEle.name} & age :{curEle.age}</h1>)
           }
           |<button className="btn" onClick={clearArray}>Clear</button>
        </>
    )

}
export default UseStateArray;