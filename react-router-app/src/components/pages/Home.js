import React,{useState,useEffect} from 'react'
import axios from "axios";

import { Link } from 'react-router-dom';



const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
       loadUser();
    },[]);

    const loadUser = async ()=>{
        const result = await  axios.get("http://localhost:3000/users");
        //console.log(result);
        //.setUser(result.data.reverse());
        setUser(result.data);
    }

    const  deleteUser = async id =>{
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUser();
    }
    return (
    <div className="container">
      <div className="py-4 table">
        <h1>Home Page</h1><hr/>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
              
            </tr>
          </thead>
                    <tbody>
                        {users.map((user, index)=>(
                                <tr>
                                    <th scope ="row">{ index+1 }</th>
                                    <td>{ user.name }</td>
                                    <td>{user.username}</td>
                                    <td>{ user.email }</td>
                                    <td style={{display:"flex", paddingRight:"15px"}}>

                                        <Link style={{marginRight:"4px"}}className="btn btn-primary " to={`/users/user/${user.id}`} >View</Link>
                                        <Link style={{marginRight:"4px"}} className="btn btn-outline-primary " to="/users/edit">Edit</Link>
                                        <Link style={{marginRight:"4px"}} className="btn btn-danger" onClick = {()=> deleteUser(user.id)} to="/">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </table>

            </div>

        </div>
    )
}
export default Home;