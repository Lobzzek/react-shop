import React from 'react';
import s from './Login.module.css';
import facebookSvg from '../../assets/img/facebook.svg';
import googleSvg from '../../assets/img/google.svg';


const Login = () => {
    return (
        <div className={s.body}>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">ПАРОЛЬ</label>
                    <input type="password" />
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Запомнить</label>
                    <a href="" className={s.forgot}>Забыл пароль?</a>
                </div>
                <button className={s.log}>Войти &#8594;</button>
                <p className={s.p1}>Войти через:</p>
                <div>
                    <a href="">
                        <img src={googleSvg} alt="google" />
                    </a>
                    <a href="">
                        <img src={facebookSvg} alt="facebook" />
                    </a>
                </div>
                <p className={s.p1}>Или</p>
        </div>
    )
}

export default Login;
