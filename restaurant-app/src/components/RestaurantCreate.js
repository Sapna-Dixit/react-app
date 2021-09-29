import React from "react"
import RestaurantList from "./RestaurantList";

export default class RestaurantCreate extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name:null,
            email:null,
            address:null,
            rating:null
        }
    }
     create()
    {
        fetch("http://localhost:3000/restaurant",{
            method : "Post",
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            resp.json().then((result)=>{alert("Restaurant has been added...")})
        })
    }
    render()
    {
        return(
            <div>
                <h1>Restaurant Create</h1><br/>
                <br/>
               <input  onChange = {(event)=>{this.setState({name:event.target.value})}} placeholder ="Restaurant  Name"/><br/><br/>
               <input onChange = {(event)=>{this.setState({email:event.target.value})}} placeholder = "Restaurant email"/><br/><br/>
               <input onChange ={(event)=>{this.setState({address:event.target.value})}} placeholder = "Restaurant address"/><br/><br/>
               <input onChange = {(event)=> {this.setState({rating:event.target.value})}} placeholder = "Restaurant rating"/><br/><br/>

               <button onClick = {()=>{this.create()}}>Add Restaurant</button>

            </div>
        )
    }
}
