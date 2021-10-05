import React from 'react'
const GithubUsers = ({user}) =>{
    return(
        <>
             <h1>List of Git users</h1>
        <div className="container-fluid mt-5">
            <div className ="row text-center">
                {
                    user.map((curEle)=>{
                        

                        return (
                            <div className="col-10 col-md-4 mt-5">
                            <div className="card  p-2">
                                <div className="image">
                                    <img src={curEle.url} class="rounded" width="150px"/>

                                </div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb=0 mt=0 textleft">{curEle.id}</h4><span class="textleft">{curEle.login}</span>
                                        
                                        
                                    
                                    
                                    </div>

                                    </div>
                                </div>

                            

                                    )
                                })
                            }
                        
                        </div>

                    </div>

                    
        </>
    )
}
export default GithubUsers;