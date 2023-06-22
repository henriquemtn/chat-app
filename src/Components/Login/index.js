import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return(
        <C.Container>
            <MdMessage />
            <C.Title>Chat App</C.Title>
            <C.Info>
             Chat App desenvolvido com ReactJS e Firebase!
            </C.Info>
            <C.Button onClick={handleSignin}>Login with Google</C.Button>
        </C.Container>
    );   
};

export default Login;