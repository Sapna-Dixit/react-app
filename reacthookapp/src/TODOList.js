import React from 'react'

const TODOList = ()=>
{
    const bioData = [
        {id :1, name :"smith", age : 27},
        {id:2, name:"Andrew", age :25},
        {id:3, name : "Mathew" ,age:26}
    ]
    const[myArray, setMyArray] = React.useState(bioData);

    const clearArray=()=>
    {
        setMyArray([]);
    }

    const remove = (id) =>{
        //alert(id);
        const myNewArray = myArray.filter((curEle)=> {
            return curEle.id!=id;
        });
        setMyArray(myNewArray);
    }

    return(
        <>
          {
              myArray.map((curEle)=><h1 className="h1Style" key={curEle.id}>Name:{curEle.name} & age:{curEle.age}
              <button className="btInner" onClick={()=>remove(curEle.id)}>remove</button>
              </h1>)
          }
          <button class="btn" onClick = {clearArray}>Clear</button>
        </>
    );
}
export default TODOList;