import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate('/login')
    }

    return (
         <div > 
            <h1 style={{color: 'navy'}}>Главная страница</h1>
            <button onClick={goToLogin} style={{color: 'navy'}}>Перейти на страницу входа</button>
          
        </div>
    );
};

export default Home;