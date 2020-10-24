import React from 'react'
import s from './Checkout.module.css';

const FirstPage = () => {
    return (
        <>
            <div className={s.checkout}>
                <h1>Введите данные</h1>
                <div>
                    <label htmlFor="">ФИО</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Телефон</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">ЭЛ.ПОЧТА</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">ГОРОД</label>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}

const SecondPage = () => {
    return (
        <div className={s.payment}>
            <h1>Выбирите способ оплаты</h1>
            <div>
                <p>Безналичный</p>
                <img src="./img/mastercard.svg" alt="" />
                <img src="./img/privat.svg" alt="" />
                <img src="./img/paypal.svg" alt="" />
                <img src="./img/visa.svg" alt="" />
            </div>
            <div>
                <p>Наличными</p>
                <img src="./img/poshta.svg" alt=""/>
            </div>
        </div>
    )
}


const Checkout = () => {
    return (
        <div className={s.wrapper}>
            <h1>Оформление заказа</h1>
            <div className={s.goods}></div>
            <FirstPage />
            <section>
                <button className={s.next}>Далее</button>
                <p>Шаг: 1 из 2</p>
            </section>
        </div>
    )
}

export default Checkout
