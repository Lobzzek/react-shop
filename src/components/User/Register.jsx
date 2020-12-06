import React from 'react'
import s from './Register.module.css';
import { checkInput } from './../../Redux/actions/checkInput.js';
import { useDispatch} from 'react-redux';
import { setFormValue } from './../../Redux/actions/form';

const Register = () => {
    const dispatch = useDispatch();

    let [right, setRight] = React.useState(false);
    const email = React.useRef(),
        password1 = React.useRef(),
        password2 = React.useRef()


    const checkInput = (input, reg) => {
        let regexp = new RegExp(reg, "");
        if (regexp.test(input.current.value)) {
            input.current.style.color = "green";
            input.current.style.border = "1px solid green";
        } else {
            input.current.style.color = "#800";
            input.current.style.border = "1px solid #800";
        }

    }
    const checkPassword2 = () => {
        if (password2.current.value === password1.current.value) {
            password2.current.style.color = "green";
            password2.current.style.border = "1px solid green";
        }else {
            password2.current.style.color = "#800";
            password2.current.style.border = "1px solid #800";
        }
    }

    const checkAllInputs = () =>{
        if (password2.current.value === password1.current.value &&
        /^.+@[a-z]{2,6}\.[a-z]{2,4}$/.test(email.current.value) &&
        /^.{4,}$/.test(password1.current.value) ){
            setRight(right = true);
        }else{
            setRight(right = false);
        }
    }

    const register = () =>{
        if (window.localStorage.getItem("login") && window.localStorage.getItem("password")){
            alert("Вы уже зарегистрированы")
        }else{
            window.localStorage.setItem("login", `${email.current.value}`);
            window.localStorage.setItem("password", `${password1.current.value}`);
            alert("Спасибо за регистрацию :)");
            dispatch(setFormValue(true));
        }
    }
    return (
        <div className={s.body}>
            <div>
                <label htmlFor="">ЭЛ. ПОЧТА</label>
                <input ref={email} onChange={() => checkInput(email, "^.+@[a-z]{2,6}\\.[a-z]{2,4}$")} type="email" />
            </div>
            <div>
                <label htmlFor="">ПАРОЛЬ</label>
                <input ref={password1} onChange={() => checkInput(password1, "^.{4,}$")} type="password" />
            </div>
            <div>
                <label htmlFor="">ПОДТВЕРДИТЕ ПАРОЛЬ</label>
                <input onMouseMove={checkAllInputs} ref={password2} onChange={checkPassword2} type="password" />
            </div>
            <button onClick={register} className={right ? `${s.register} ${s.active}` : s.register}>Зарегистрироватся &#8594;</button>
        </div>
    )
}

export default Register
