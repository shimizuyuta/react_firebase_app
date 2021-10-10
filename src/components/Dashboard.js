import React,{useState,useEffect,useContext} from "react";
import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import { signInWithGoogle } from "../service/firebase";
import * as Api from '../service/api'

const DashBoard = () => {
    const currentUser = useContext(AuthContext);
    const [inputName,setInputName] = useState(null)
    console.log(inputName)
    const formRender = () =>{
        let dom
    if(dig(currentUser,'currentUser','uid')){
        dom = <form>
          <input placeholder='ToDoName' onChange={(event)=>setInputName(event.currentTarget.value)}/>
          <button type='button' onClick={post}>add</button>
        </form>
    }else{
        dom = <button onClick={signInWithGoogle}>login</button>
    }
     return dom
    }
    const post = () =>{
       Api.addTodo(inputName,currentUser.currentUser.uid)
    }
    return(
        <div>
         {formRender()}
        </div>
    )
}

export default DashBoard