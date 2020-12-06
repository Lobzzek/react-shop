import React, {useState} from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';
import s from './User.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setFormValue } from './../../Redux/actions/form.js'


const User = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.formValue.value);    
    const [nameA, setNameA] = useState('Быстрая регистрация');

    const change = () => {
        dispatch(setFormValue(!state));
    }

    return (
        <div className={s.wrapper}>
            {state ? <Login /> : <Register />}
            <button onClick={change} className={s.register}>{state ? 'Быстрая регистрация' : "Войти"}</button>
        </div>
    )
} 
export default User;
