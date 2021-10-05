import React,{useRef}from 'react'

const UseRef1 =()=>{
    const luckyName = useRef(null);
    const[show, setShow] = React.useState(false);

    const submitForm = (e) =>
    {
        e.preventDefault();
       const name=luckyName.current.value
        name === ""? alert("Plz fill the data"):setShow(true);
    }
    return(
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                <label htmlFor="luckyName" >Enter your lucky name</label><br/>
                <input type="text" id="luckyName" ref={luckyName}/>
                </div><br/>
                <button type="submit">Submit</button>
            </form>
            <p>{show?`your lucky name is ${luckyName.current.value}`:""}</p>
        </div>
    )
}
export default UseRef1;