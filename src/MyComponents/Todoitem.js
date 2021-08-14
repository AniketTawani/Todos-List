import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
    return (
        <div>
           <h4>{todo.title}</h4>
           <h5>{todo.desc}</h5>
           <button className="btn btn-sm btn-danger" onClick ={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
    }