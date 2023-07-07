import logo from './logo.svg';
import './App.css';
import My_Header from './components/My_Header'
import Footer from './components/My_footer'
import Todos from './components/Todos';
import React, {useState, useEffect, useLayoutEffect} from "react";
import Add_Todo from './components/Add_Todo';

function App() {
  let initTodo;
  if(localStorage.getItem("todo")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todo"))
  }
const [todo, setTodo]  = useState(initTodo);
useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(todo))
},[todo]) 

  const onDelete=(values)=>{
    console.log("onDelete item",values);

    setTodo(todo.filter((a)=>{
      return a !==values;
    }))
    localStorage.setItem("todo",JSON.stringify(todo));
  }

  const add_todo=(title,desc)=>{
    let sno;
    todo.length===0?sno=1:
    sno = todo[todo.length-1].sno+1;
    const myTodo={
      sno : sno,
      Title : title,
      Disc : desc
    };
    console.log(myTodo);
    setTodo([...todo,myTodo]); //this will add myTodo in todo......

    localStorage.setItem("todo",JSON.stringify(todo));
    
  }

  return (
    <>
    <My_Header title = "My first React Project"/>
    {/* <My_Intro/>
    <Project/> */}
    <Add_Todo add_todo={add_todo}/>
    <Todos todo = {todo} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
