import React from 'react'

const AddUser = () =>{
    return(
        <div  className="container">
            <div className="row">
                <div className = "col-sm-3"></div>
                <div className = "col-sm-6">
                    <form>
                        <h1>Add User</h1>
                        <div className = "form-group">
                            <input type = "text" className="form-control" placeholder = "Enter your Name" />
                        </div>
                        <div className = "form-group">
                            <input type="text"  className="form-control" placeholder="Enter username"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Enter your Email-Address"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className = "form-control" placeholder="Enter your phone"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className = "form-control" placeholder="Enter your wweebsite"/>
                        </div>
                        <input type ="submit"className="btn btn-primary btn-block" value ="Add User" />
                    </form>
                </div>
                <div className = "col-sm-3" ></div>

            </div>
        </div>
    )
};
export default AddUser;