import  React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';

const EditUser = () =>{

    let history = useHistory();
    const {id} = useParams();
    const[user, setUser] = useState({
        name : "",
        username: "",
        email  : "",
        phone :  "",
        website : ""
    });

    useEffect(()=>{
        loadUser();
    },[]);

    const{name, username,email,phone,website} = user;

    const onInputChange = e => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const   onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`,user);
        history.push("/");
    }

    const loadUser = async () =>{
        const result  = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(result.data);

    }
    return(
        <div className ="container">
            <div className="row">
                <div className = "col-sm-2"></div>
                <div className = "col-sm-7" style= {{boxShadow:"3px 3px 3px 3px",marginTop:"50px",padding:"20px"}}>
                       
                    <h1>Edit User</h1><hr/>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input 
                            type="text"
                            className = "form-control"
                            placeholder ="Enter your name"
                            name = "name"
                            value = {name}
                            onChange ={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder ="Enter  username"
                            name = "username"
                            value ={username}
                            onChange = {e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type = "email" 
                            className="form-control"
                            placeholder="Enter email"
                            name = "email"
                            value = {email}
                            onChange = {e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type = "text"
                            className = "form-control"
                            placeholder ="Enter phone"
                            name = "phone"
                            value = {phone}
                            onChange = {e => onInputChange(e)}
                            />

                        </div>

                        <div className ="form-group">
                            <input 
                            type="text"
                            className = "form-control"
                            placeholder = "Enter website"
                            name = "website" 
                            value = {website}
                            onChange = {e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input  type="submit" className="btn btn-primary form-control" value ="Edit" />

                        </div>
                    </form>
            </div>
                 <div className = "col-sm-2"></div>
        </div>
        </div>
    )
};
export default EditUser;
