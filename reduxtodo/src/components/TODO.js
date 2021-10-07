import React,{useSelector,useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './TODO.css'
import {useDispatch} from 'react-redux';
import  {addToDo,deleteToDo,removeToDo} from '../actions/index'

const TODO = ()=>{
    const[inputData, setInputData] = useState('')
    const list =useSelector((state)=> state.ToDoReducer.list)
    const dispatch = useDispatch();
    return(
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add your list here.</figcaption>
                   
                </figure>
                <div className="addItems">
                    <input type="text" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                   <i className="fa fa-plus add-btn" onClick ={()=>dispatch(addToDo(inputData),setInputData(''))}></i>
                    
                </div>
                <div className="showItem" >
                    {
                        list.map((elem) =>{
                        <div className="eachItem" key={elem.id}>
                            <h1>{elem.data}</h1>
                             <i className ="far fa-trash-alt add-btn" title="delete item" onClick ={()=>dispatch(deleteToDo(inputData),setInputData(''))}></i>
                        </div>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}
export default TODO;