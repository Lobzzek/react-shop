import React from 'react';
import s from './Login.module.css';


const Login = () => {
    const email = React.useRef();
    const forgotPassword = () =>{
        email.current.value.length > 0 ?
        alert(`Мы отправили новый пароль на ${email.current.value}`) :
        alert(`Ведите Email`)
    }
    return (
        <div className={s.body}>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input ref={email} list="logins" type="email" />
                    <datalist id="logins"> 
                        <option>{window.localStorage.getItem("login")}</option>
                    </datalist>    
                </div>
                <div>
                    <label htmlFor="">ПАРОЛЬ</label>
                    <input type="password" />
                </div>
                <div>
                    <button href="" onClick={forgotPassword} className={s.forgot}>Забыли пароль?</button>
                </div>
                <button className={s.log}>Войти &#8594;</button>
                <p className={s.p1}>Или</p>
        </div>
    )
}

export default Login;
