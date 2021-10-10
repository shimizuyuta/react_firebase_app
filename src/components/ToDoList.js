import React,{useState,useEffect,useContext} from "react";
// import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import AuthProvider from "../providers/AuthProvider";
// import { signInWithGoogle } from "../service/firebase";
import * as Api from '../service/api'


const ToDoList = (props) =>{
    console.log(props,'props')
    const deleteHandle= (id) =>{
        Api.todoDelete(id)
        props.fetch()
    }
    const todoList = props.todos.map((todo)=>{
        return(
            <li key={todo.id}>{todo.content}
            <button type="button" onClick={()=>deleteHandle(todo.id)}>
                delete
            </button>
            </li>
        )
    })
    return(
        <div>{todoList}</div>
    )
}

export default ToDoList;