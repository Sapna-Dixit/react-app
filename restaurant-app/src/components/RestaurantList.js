import React from "react"

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
                        {
                            this.state.list.map((item,i)=>
                            <div>
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <span>{item.email}</span>
                                <span>{item.rating}</span>
                            </div>)
                            
                        }
                       
                    </div>
                     :<p>Please wait....</p>
                }
            </div>
        )
    }
}
