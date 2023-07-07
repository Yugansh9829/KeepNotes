import React from 'react'
import TodoItems from './TodoItems'

export default function Todos(props) {
  
  return (
    <div className='container'>
      <h3 className='text-center my-3 '>My Todo List</h3>
      {props.todo.length===0?"No Todos to Display":
      props.todo.map((values)=>{
          return<TodoItems values={values} key={values.sno} onDelete = {props.onDelete}/> 
        })
      }
        
    </div>
  )
}

// here props.onDelete is written as it is used to pass the function
// if we want to call a function then we simply write in arrow function as written in TodoItems.js file
