import React from 'react';
import {useNavigate} from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

    const handleLogin =()=>{
        navigate('/form')
    }

    return (
        <div>
            <h1 style={{color: 'green'}}>Страница входа</h1>
            <button onClick={handleLogin} style={{color: 'green'}}>Войти</button>
           
        </div>
        
    );
};

export default Login;