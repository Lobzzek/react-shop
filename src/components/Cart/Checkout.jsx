import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Checkout.module.css';
import mastercardSvg from '../../assets/img/mastercard.svg';
import paypalSvg from '../../assets/img/paypal.svg';
import privatSvg from '../../assets/img/privat.svg';
import poshtaSvg from '../../assets/img/poshta.svg';
import visaSvg from '../../assets/img/visa.svg';


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
                <img src={mastercardSvg} alt="" />
                <img src={privatSvg} alt="" />
                <img src={paypalSvg} alt="" />
                <img src={visaSvg} alt="" />
            </div>
            <div>
                <p>Наличными</p>
                <img src={poshtaSvg} alt="" />
            </div>
        </div>
    )
}


const Checkout = (props) => {
    const [firstPage, setFirstPage] = useState(true);
    const changeStatePage = () => setFirstPage(!firstPage);

    const mapGoods = props.items.map((item, index) => (
        <div key={index}>
            <img src={item.imgUrl} alt="" />
            <p className={s.name}>{item.name}</p>
            <p className={s.price}>{item.price} UAH</p>
            <p className={s.count}>1 шт.</p>
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
                        {
                            firstPage === true ? <FirstPage /> : <SecondPage />
                        }
                        <section>
                            {
                                firstPage ? 
                                    <button onClick={changeStatePage} className={s.next}>Далее</button> 
                                : 
                                    <NavLink to="/">Обработать</NavLink>
                            }
                            
                            <p>{firstPage ? "Шаг: 1 из 2" : "Шаг: 2 из 2" }</p>
                        </section>
                    </>
                )
            }

        </div>
    )
}

export default Checkout
