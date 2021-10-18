import React, {Component} from 'react'
import {increment,decrement, reset} from '../actions/index'
import {useSelector,useDispatch} from 'react-redux'



function Counter(){

    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
        //const{counter, increment, decrement, reset} = this.props;
        console.log("----------------",this.props);
        
        return(
            <div className="App">
                <div> { counter ? counter : 0 }</div>
                <div>
                    <button onClick ={()=>dispatch(increment())}>INCREMENT BY 1</button>
                </div>
                <div>
                    <button onClick={()=>dispatch(decrement())}>DECREMENT By 1</button>
                </div>
                <div>
                    <button onClick = {()=>dispatch(reset())}>RESET</button>
                </div>

            </div>
        )
    }


export default Counter;