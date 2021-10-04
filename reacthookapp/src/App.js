import React from 'react'
import RulesHooks from './rulesHooks'
import UseStateArray from './useStateArray'
import UseStateObject from './UseStateObject'
import TODOList from './TODOList'
import  ShortCirEval from './ShortCirEval'
import BasicForms from './Basicforms'
import "./App.css"
import UseEffect1 from './UseEffect1'
import EmojiReact from './EmojiReact'
import UseEffect2 from './UseEffect2'

const App = ()=>
{

//    //console.log(useState('Webiwork'));
//  //var val ="React change value"
// //  let myFirstVal = useState("React")[0];
// //  console.log(myFirstVal);
//  const[myName, setMyName] = useState("webiwork technology");
  
//  const changeName =()=>
//   {
//     //val = "Helloo React hooks"
//     //console.log(val)
//     let val = myName;

//     // if(val === 'webiwork technology')
//     // {
//     //   setMyName("React is a front-end js libraray...!!");
//     // }
//     // else
//     // {
//     //   setMyName("webiwork technology")
//     // }
   
//     (val === 'webiwork technology')? 
//     setMyName("React useState hook..!!!"):setMyName("webiwork technology")
// } 
 
 
  
  return(
    <center>
    <div className="App">
      {
      //    <h1>{myName}</h1>
      //    <button onClick = {changeName}>click me</button>
     
      // <RulesHooks />
      // <UseStateArray />
   

    // <UseStateObject />
    // <TODOList />
    // <ShortCirEval />
    // <hr/>
 
   // <BasicForms />
   //<EmojiReact />
  }
   
  <UseEffect1 />
  <UseEffect2 />
    </div> </center>
  )
 
}
export default App;