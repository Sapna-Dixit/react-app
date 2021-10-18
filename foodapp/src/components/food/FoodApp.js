import React from 'react'

const FoodApp =() =>{
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <h6>SEARCH FOOD APP -  BY Nationality</h6>
                </div>
                <div className="card-body">
                    <div className="body-section">
                        <form className="form-inline">
                            <div className="form-group">
                                <input 
                                type = "text"
                                size = "30"
                                className = "form-control"
                                placeholder ="Enter your nationality"/>
                                <input 
                                type = "submit"
                                className = "form-control"
                                value = "Search"/>

                            </div>

                        </form>
                    </div>
                </div>
                <div className="card-footer"></div>

            </div>
        </React.Fragment>
    )
}
export default FoodApp;