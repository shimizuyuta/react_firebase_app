import React,{useState,useEffect,useContext} from "react";
// import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import AuthProvider from "../providers/AuthProvider";
// import { signInWithGoogle } from "../service/firebase";
import * as Api from '../service/api'
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 360,
      margin: 'auto',
    },
    ul: {
      paddingLeft: 0,
      listStyle: 'none',
    },
    list: {
      justifyContent: 'space-between',
    },
  }));

const ToDoList = (props) =>{
    const classes = useStyles();
    console.log(props,'props')
    const deleteHandle= (id) =>{
        Api.todoDelete(id)
        props.fetch()
    }
    const checkHandle = async(id) =>{
        await Api.toggleComplete(id);
        props.fetch();

    }

    const todoList = props.todos.map((todo)=>{
        return(
            // <li key={todo.id}>{todo.content}
            // <button type="button" onClick={()=>deleteHandle(todo.id)}>
            //     delete
            // </button>
            // </li>
            <ListItem key={todo.id}>
                <ListItemIcon>
                    <Checkbox checked={todo.isComplete} onChange={()=> checkHandle(todo.id)} name=""/>
                </ListItemIcon>
                <ListItemText
                  primary={todo.content}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteHandle(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    })
    return(
        
        <div className={classes.root}>
            <h2> your todo list</h2>
            <ul className={classes.ul}>{todoList}</ul>
        </div>
    )
}

export default ToDoList;