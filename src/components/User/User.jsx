import React, {useState, useEffect} from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import s from './User.module.css'


const User = () => {
    const [login, setLogin] = useState(true);
    
    const [nameA, setNameA] = useState('Быстрая регистрация');
    const change = () => {
        setLogin(!login);
        login ? setNameA('Войти') : setNameA('Быстрая регистрация');
    }
    
    // const form = React.createRef();
    
    // useEffect(() => {
    //      form.current.style.animation = 'showP .6s 1';
    //      return () => {
    //          form.current.style.animation = 'hideP .6s 1';
    //      }
    //  }, [])

    return (
        <div className={s.wrapper}>
            {login ? <Login /> : <Register />}
            <button onClick={change} className={s.register}>{nameA}</button>
        </div>
    )
} 
export default User;
