import React from 'react'
import './App.css'


const App = ()=>{
  return(
    <>
    <center>
    <div class="container">
      <h1>Increment/Decrement counter</h1>
      <h1>using React and Redux</h1>
      
      <div class="quantity">
          <a class="quantity_minus" title="Decrement"><span> - </span></a>
          <input type="text" name="quantity" class="quantity_input" value="0"/>
          <a class="quantity_plus" title="Increment"><span> + </span></a>

      </div>

    </div>
    </center>
    </>
  )
}
export default App;