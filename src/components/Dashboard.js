import React,{useState,useEffect,useContext} from "react";
import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import { signInWithGoogle } from "../service/firebase";
import * as Api from '../service/api'
import ToDoList from "./ToDoList";
import { TextField } from "@material-ui/core";
import {Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(()=>({
  root:{
    textAlign:'center',
    marginTop:30,
  },
  form: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    marginBottom: 40,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
  input: {
    marginRight: 10
  }
}))

const DashBoard = () => {
   const classes = useStyle()
    const currentUser = useContext(AuthContext);
    const [inputName,setInputName] = useState('')
    console.log(inputName)
    const [todos,setTodos] = useState([])
    console.log(todos)
    useEffect(()=>{
       fetch();
    },[currentUser])

    const fetch = async()=>{
      if(dig(currentUser,'currentUser','uid')){
        const data = await Api.initGet(currentUser.currentUser.uid)
        await setTodos(data)
        
      }
    }

    const formRender = () =>{
        let dom
    if(dig(currentUser,'currentUser','uid')){
        dom = <form className={classes.form}>
          <TextField value={inputName} className={classes.input} placeholder='ToDoName' onChange={(event)=>setInputName(event.currentTarget.value)}/>
          <Button variant="contained" color="primary" size="small"
           disabled={inputName.length>0?false:true}
           onClick={post}
          
          >add</Button>
        </form>
    }else{
        dom = <button onClick={signInWithGoogle}>login</button>
    }
     return dom
    }

    const post = async() =>{
       await Api.addTodo(inputName,currentUser.currentUser.uid)
       await setInputName('');
       fetch();
    }
    return(
        <div className={classes.root}>
         {formRender()}
         <ToDoList todos={todos} fetch={fetch}/>
        </div>
    )
}

export default DashBoard