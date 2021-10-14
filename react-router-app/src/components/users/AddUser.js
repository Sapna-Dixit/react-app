import React,{useState} from 'react'
import  axios from 'axios';
import {useHistory} from 'react-router-dom'


const AddUser = () =>{

    let  history = useHistory();
    const [user, setUser] = useState({
        name : "",
        username: "",
        email:"",
        phone:"",
        website:""
    });

    const{name, username, email, phone, website} = user;

    const onInputChange = e =>{
     setUser({ ...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3000/users",user);
        history.push("/");


    }
    return(
        <div  className="container">
            <div className="row">
                <div className = "col-sm-2"></div>
                <div className = "col-sm-8"  style={{padding:"10px"}}>
                    <form onSubmit = {e => onSubmit(e)}
                        style= {{boxShadow: "3px 3px 3px 3px lightgrey",marginTop:"50px",padding:"20px"}}
                    >
                        <h1>Add User</h1><hr/>
                        <div className = "form-group">
                            <input 
                            type = "text" 
                            className="form-control"
                             placeholder = "Enter your Name"
                             name ="name"
                             value ={name}
                             onChange ={e => onInputChange(e)} />
                        </div>
                        <div className = "form-group">
                            <input 
                            type="text"  
                            className="form-control" 
                            placeholder="Enter username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input 
                            className="form-control" 
                            type="email"
                             placeholder="Enter your Email-Address"
                             name="email"
                             value ={email}
                             onChange = {e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className = "form-control"
                             placeholder="Enter your phone"
                             name="phone"
                             valure={phone}
                             onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input 
                             type="text" 
                             className = "form-control"
                              placeholder="Enter your website"
                              name="website"
                              value={website}
                              onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input  type="submit" className="btn btn-primary form-control" value ="AddUser" />

                        </div>
                    </form>
                </div>
                <div className = "col-sm-2" ></div>

            </div>
        </div>
    )
};
export default AddUser;