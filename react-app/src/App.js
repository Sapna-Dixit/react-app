import React from 'react'
import './App.css';
import Accordian from './Accordian'

const item =[
  {
    title :"What is React?",
    content :'React is a front-end javascript framework.'
  },
  {
    title :'Why use React?',
    content:'React is a favourite JS library among engineers.'
  },
  {
    title : 'How do you use React',
    content:'You use React by creating component.'
  }
];
export default ()=>{
  return <div>
    <h1>About React </h1>
  
    <Accordian  item ={item}/>  <br/>

  </div>
}