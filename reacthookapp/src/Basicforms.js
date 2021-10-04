import  React,{useState} from 'react'


const BasicForms = ()=>
{
    const [email, setEmail] = useState("")
    const [pass,setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const submitForm =(e)=>
    {
        e.preventDefault();
      if(email && pass)
      {
        const newEntry = {id:new Date().getTime().toString(),email:email,password:pass}
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setEmail("");
        setPassword("");

      }
      else
      {
          alert("Please fill the Data");
      }

    }
    return(
        <>
          <form action="" className="loginfrm" onSubmit={submitForm}>
              <div className="email">
                  <label htmlFor="email">&nbsp;&nbsp;&nbsp;&nbsp;Email :&nbsp;&nbsp;</label>
                  <input  type="email" name ="email" autoComplete="off" value={email}
                  onChange={(e)=>setEmail(e.target.value)}/><br/>
              </div>
              <div className="pass">
                  <br/>
                  <label htmlFor="passwowrd">Password:</label>&nbsp;
                  <input type="password" name="password" value={pass} autoComplete="off"
                  onChange={(e)=>setPassword(e.target.value)}/><br/>
              </div>          
            <br/>
        <button type="submit">Login</button>
       
          </form>
         <br/>
         <br/> <div className="ePass">
              {
                  allEntry.map((curEle)=>{
                      const{id,email,password} = curEle;
                        return(
                            <div className="showDataStyle"key={curEle.id}>

                                <span>{email}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{password}</span>
                            </div>
                        )
                  })
              }
          </div>
        </>
    )
}

export default BasicForms;