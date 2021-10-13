import React from 'react'

const  Contact = () =>{
    return(
        <div className = "container">
            <div className="row">
              
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                
                <center>
                <br/><br/>
            <h1>Login</h1><hr/>
                <form action="https://webiwork.com" method="post" target="_blank" className="form-horizontal frm">
                    <div className="form-group">
                        <input  required
                        type="text" 
                        className="form-control" 
                        id="email"
                        placeholder ="Enter your name"
                         />
                        
                    </div>
                    <div className="form-group">
                        <input 
                        type="password"
                        className = "form-control"
                        id="pass"
                        placeholder="Enter password"
                       />
                    </div>
                    <div className = "form-check">
                        <input 
                        type ="checkbox"
                        className="form-check-input"
                        id="checkbox"/> 
                        <label>Check me out</label> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </center>
                </div>
                <div className="col-sm-4"></div>
            </div>
            </div>
       
    )
};
export default Contact;