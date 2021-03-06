import React from "react"
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class RestaurantList extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result})
            })
        })
    }
    render()
    {
        
        return(
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list?
                    <div>
                       <Table striped bordered hover>
                           <thead>
                               <tr>
                                   <th>#</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Rating</th>
                                   <th>Address</th>
                                   <th>Operation</th>
                                   
                               </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.list.map((item,i)=>
                                // <div>
                                //     <span>{item.id}</span>
                                //     <span>{item.name}</span>
                                //     <span>{item.email}</span>
                                //     <span>{item.address}</span>
                                //     <span>{item.rating}</span>
                                // </div>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td><Link to={"/update/"+item.id}>Edit</Link></td>
                                </tr>
                                 )
                           }
                           </tbody>
                       </Table>
                    </div>
                     :<p>Please wait....</p>
                }
            </div>
        )
    }
}
