import React from 'react';
import s from './Login.module.css';


const Login = () => {
    const email = React.createRef();
    const password = React.createRef();
    const forgotPassword = () =>{
        email.current.value.length > 0 ?
        alert(`Мы отправили новый пароль на ${email.current.value}`) :
        alert(`Ведите Email`)
    }

    const accountLogin = () => {
        if (localStorage.getItem("login") &&
            localStorage.getItem("password") &&
            email.current.value === localStorage.getItem("login") &&
            password.current.value === localStorage.getItem("password")){
                alert("Вы успешно ввошли");
                localStorage.setItem("logged", true);
        } else if (!localStorage.getItem("login") &&
                   !localStorage.getItem("password")){
            alert("Пользователя не существует")
        } else if (email.current.value !== localStorage.getItem("login") ||
                   password.current.value !== localStorage.getItem("password")){
            alert("Логин или пароль не правильный")
        }
    }
    return (
        <div className={s.body}>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input ref={email} list="logins" type="email" />
                    {
                         window.localStorage.getItem("login") && (
                            <datalist id="logins">
                                <option>{window.localStorage.getItem("login")}</option>
                            </datalist>  
                         )
                    }

                </div>
                <div>
                    <label htmlFor="">ПАРОЛЬ</label>
                    <input ref={password} type="password" />
                </div>
                <div>
                    <button href="" onClick={forgotPassword} className={s.forgot}>Забыли пароль?</button>
                </div>
                <button onClick={accountLogin} className={s.log}>Войти &#8594;</button>
                <p className={s.p1}>Или</p>
        </div>
    )
}

export default Login;
