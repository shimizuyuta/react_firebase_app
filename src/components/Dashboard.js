import React,{useState,useEffect,useContext} from "react";
import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import { signInWithGoogle } from "../service/firebase";
import * as Api from '../service/api'

const DashBoard = () => {
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
        dom = <form>
          <input value={inputName} placeholder='ToDoName' onChange={(event)=>setInputName(event.currentTarget.value)}/>
          <button type='button' onClick={post}>add</button>
        </form>
    }else{
        dom = <button onClick={signInWithGoogle}>login</button>
    }
     return dom
    }

    const post = () =>{
       Api.addTodo(inputName,currentUser.currentUser.uid)
       setInputName('');
    }
    return(
        <div>
         {formRender()}
        </div>
    )
}

export default DashBoard