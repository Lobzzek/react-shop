import React from 'react'
import s from './Register.module.css'

const Register = () => {
    return (
        <div className={s.body}>
            <div>
                <label htmlFor="">ЭЛ. ПОЧТА</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">ПАРОЛЬ</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">ПОДТВЕРДИТЕ ПАРОЛЬ</label>
                <input type="text" />
            </div>
            <button className={s.register}>Зарегистрироватся &#8594;</button>
        </div>
    )
}

export default Register
