import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
       loadUser();
    },[]);

    const loadUser = async ()=>{
        const result = await  axios.get("http://localhost:3000/users");
        //console.log(result);
        setUser(result.data);
    }
    return (
       <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
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
                                    <td>
                                        <Link class="btn btn-primary ">View</Link>
                                        <Link class="btn btn-outline-primary ">Edit</Link>
                                        <Link class="btn btn-danger ">Delete</Link>
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