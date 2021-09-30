import React from 'react'

const Accordian = ({item})=>{
    const renderedItems = item.map(item=>{

    return <React.Fragment key ={item.title}>
        <div className ="title active">
            <i className ="dropdown icon"></i>
            {item.title}
        </div>
        <div className = "content active">
            <p>{item.content}</p>
        </div>
        <p>{item.length}</p>
    </React.Fragment>});
    return <div className = "ui styled accordian">
        {renderedItems}

    </div>
}

export default Accordian 