import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Checkout.module.css';
import mastercardSvg from '../../assets/img/mastercard.svg';
import paypalSvg from '../../assets/img/paypal.svg';
import privatSvg from '../../assets/img/privat.svg';
import poshtaSvg from '../../assets/img/poshta.svg';
import visaSvg from '../../assets/img/visa.svg';
import { setCheckInput } from './../../Redux/actions/checkInput.js';
import { useDispatch, useSelector } from 'react-redux';


const FirstPage = () => {
    const name = React.useRef(),
        tel = React.useRef(),
        email = React.useRef(),
        sity = React.useRef()
    const dispatch = useDispatch();
    const [count, setCount] = React.useState(0)
    const checkInput = (input, reg, flag) => {
        const regexp = new RegExp(reg, flag)
        let i = 1;
        if (!regexp.test(input.current.value)) {
            input.current.style.border = "1px solid red";
            input.current.style.color = "red";

            if (input.current.hasAttribute("right")) {
                input.current.removeAttribute("right")
            }
        } else if (name.current.hasAttribute("right") &&
            tel.current.hasAttribute("right") &&
            email.current.hasAttribute("right") &&
            sity.current.hasAttribute("right")) {
            dispatch(setCheckInput("yes"));
        }
        else {
            input.current.style.border = "1px solid green";
            input.current.style.color = "green";

            if (!input.current.hasAttribute("right")) {
                input.current.setAttribute("right", "yes");
            }
        }
    }
    // if (/^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$/.test(name.current)){
    //     console.log("dasd")
    // }

    return (
        <>
            <form className={s.checkout}>
                <h1>Введите данные</h1>
                <div>
                    <label htmlFor="">ФИО</label>
                    <input placeholder="Денис Денисевич Денисов" onChange={() => checkInput(name, "^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$", "")} ref={name} required type="name" />
                </div>
                <div>
                    <label htmlFor="">Телефон</label>
                    <input placeholder="+380yyxxxxxxx" onChange={() => checkInput(tel, "^\\+380[0-9]{2}[0-9]{7}$", "")} ref={tel} required type="tel" />
                </div>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input placeholder="name@email.com" onChange={() => checkInput(email, "^.+@[a-z]{2,6}\\.[a-z]{2,4}$", "")} ref={email} required type="opa" />
                </div>
                <div>
                    <label htmlFor="">ГОРОД</label>
                    <input placeholder="Изюм Харьковкая обл." onChange={() => checkInput(sity, "^[А-Я].+", "")} ref={sity} required type="text" />
                </div>
            </form>
        </>
    )

}

const SecondPage = () => {
    return (
        <div className={s.payment}>
            <h1>Выбирите способ оплаты</h1>
            <div>
                <p>Безналичный</p>
                <NavLink to="/" ><img src={mastercardSvg} alt="" /></NavLink>
                <NavLink to="/" ><img src={privatSvg} alt="" /></NavLink>
                <NavLink to="/" ><img src={paypalSvg} alt="" /></NavLink>
                <NavLink to="/" ><img src={visaSvg} alt="" /></NavLink>
            </div>
            <div>
                <p>Наличными</p>
                <img src={poshtaSvg} alt="" />
            </div>
        </div>
    )
}


const Checkout = (props) => {
    const state = useSelector(state => state.checkInput.items);

    const [firstPage, setFirstPage] = useState(true);
    const changeStatePage = () => setFirstPage(!firstPage);

    const mapGoods = props.items.map((item, index) => (
        <div key={index}>
            <img src={item.imgUrl} alt="" />
            <p className={s.name}>{item.name}</p>
            <p className={s.price}>{item.price} UAH</p>
            <p className={s.count}>{item.score} шт.</p>
            <p className={s.activeColor}>{item.selectedColor}</p>
            <p className={s.activeSize}>{item.selectedSize}</p>
        </div>
    ))
    return (
        <div className={s.wrapper}>

            {props.items.length === 0 && (
                <h1>Невозможно оформить заказ</h1>
            )
            }

            {
                props.items.length !== 0 && (
                    <>
                        <h1>Оформление заказа</h1>
                        <div className={s.goods}>
                            {mapGoods}
                        </div>
                        <div className={s.body}>
                            {
                                firstPage === true ? <FirstPage /> : <SecondPage />
                            }
                        </div>
                        <section>
                            {
                                firstPage ?
                                    <button onClick={changeStatePage} className={state === "yes" ? `${s.next} ${s.active}` : s.next}>Далее</button>
                                    :
                                    <NavLink to="/">Обработать</NavLink>
                            }

                            <p>{firstPage ? "Шаг: 1 из 2" : "Шаг: 2 из 2"}</p>
                        </section>
                    </>
                )
            }

        </div>
    )
}

export default Checkout
