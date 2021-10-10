import React,{useState,useEffect,useContext} from "react";
// import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
// import { signInWithGoogle } from "../service/firebase";
// import * as Api from '../service/api'


const ToDoList = (props) =>{
    console.log(props,'props')
    const todoList = props.todos.map((todo)=>{
        return(
            <li key={todo.id}>{todo.content}</li>
        )
    })
    return(
        <div>{todoList}</div>
    )
}

export default ToDoList;