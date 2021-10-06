import React from 'react'

function Home()
{
    return(
        <div>
            
            <h1>Home Component</h1>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2TS0FsedYDiEUOcZ9gkE3Upd8Ws7YgVbQA&usqp=CAU "/>
            </div>
            <center>
            <div className = "cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyQkGS_cSvr_5EhIEuKlwLtc8dFqWlXIFcfKfzUo4GxDTAwZLwOvWB8DILCRMokAPm1g&usqp=CAU"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-phone</span><br/>
                    <span>price:$1000</span>
                </div>
                <button className="btn-wrapper item">Add cart</button>
            </div>
            </center>
        </div>
    )
}
export default Home;