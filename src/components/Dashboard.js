import React,{useState,useEffect,useContext} from "react";
import  { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig'
import { signInWithGoogle } from "../service/firebase";

const DashBoard = () => {
    const currentUser = useContext(AuthContext);
    const formRender = () =>{
        let dom
    if(dig(currentUser,'currentUser','uid')){
        dom = <form>
          <input placeholder='todoName'/>
          <button>add</button>
        </form>
    }else{
        dom = <button onClick={signInWithGoogle}>login</button>
    }
     return dom
    }
    return(
        <div>
         {formRender()}
        </div>
    )
}

export default DashBoard