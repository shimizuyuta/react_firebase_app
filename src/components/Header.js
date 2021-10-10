import React, { useContext,useState } from 'react';
import  { AuthContext } from '../providers/AuthProvider';
import { signInWithGoogle,LogOut } from '../service/firebase';
import dig from 'object-dig'

const Header = () =>{
    const currentUser = useContext(AuthContext);
    console.log(currentUser)
    const buttonRender = () =>{
        let buttonDom
        if(dig(currentUser,'currentUser')){
           buttonDom =<button onClick={LogOut}>logout</button>
        }else{
           buttonDom = <button onClick={signInWithGoogle}>login</button>
        }
        return buttonDom;
    }
    return (
        <header>
            {buttonRender()}
        </header>
    )
}

export default Header;