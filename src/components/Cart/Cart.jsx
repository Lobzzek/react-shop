import React from 'react';
import s from './Cart.module.css';

const BlockItem = () => {
    return (
        <div className={s.blockItem}>
            <button className={s.close}>&#10540;</button>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg" alt=""></img>
            <p className={s.name}>Clothes</p>
            <p className={s.price}>1000 грн.</p>
            <div className={s.score}>
                <button className={s.minus}>-</button>
                <p>1</p>
                <button className={s.plus}>+</button>
            </div>
        </div>
    )
}


const Cart = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.body}>
                <h1>Корзина</h1>
                <div className={s.items}>
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                </div>
                <p className={s.orderPrice}>Общая сумма заказа: ___</p>
                <button className={s.checkout}>Оформить заказ &#10003;</button>
            </div>
        </div>
    )
}

export default Cart;
