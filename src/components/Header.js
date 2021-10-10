import React, { useContext,useState } from 'react';
import  { AuthContext } from '../providers/AuthProvider';
import { signInWithGoogle } from '../service/firebase';
const Header = () =>{
    const currentUser = useContext(AuthContext);
    console.log(currentUser)
    return (
        <header>
            <button onClick={signInWithGoogle}>login</button>
        </header>
    )
}

export default Header;