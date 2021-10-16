import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import  login  from '../features/userSlice';

const Login = () => {
    const[name, setName] =  useState("");
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch({
            login({
                name:name,
                email:email,
                password:pass,
               
            })
        })

    }
  
    return(
        <div className="container form">
        <div className="row">
        <div className="col-sm-4"></div>
        <div className=" col-sm-4 login">
        <h2>Login Here</h2><hr/>
            <form  className="login_form" onSubmit = {(e) =>handleSubmit(e)}>
                <div className="form-group">
                    <input 
                     type="text"
                      placeholder="name" 
                      className="form-control"
                      value ={name}
                      onChange = {(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="email"
                         className="form-control" 
                         value = {email}
                         onChange= {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input 
                       type="password" 
                       placeholder="password" 
                       className="form-control"
                       value = {pass}
                       onChange = {(e)=>setPass(e.target.value)}/>
                </div>
                
                    <input type="submit" className="form-control btn btn-success" value= "Login" />
                
            </form>
           
            </div>
            <div className="col-sm-4"></div>
        </div>
        </div>
    )
}

export default Login;