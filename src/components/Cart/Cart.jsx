import React from 'react';
import s from './Cart.module.css';
import OrderBlock from './OrderBlock.jsx';
import forecastSvg from './../../assets/img/forecast.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeOrder } from './../../Redux/actions/cart';
import { NavLink } from 'react-router-dom';



const Cart = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return {
            orders: state.cart.items,
        }
    });


    const blockOrders = state.orders.map((item, index) => (
        <OrderBlock onClick={() => dispatch(removeOrder(item.id))} {...item} key={`${item.name}_${item.id}_${index}`} />
    ));
    let allPrice = 0;
    state.orders.map(item => {
        allPrice += item.price
    })
    return (
        <div className={s.wrapper}>
            <div className={s.body}>
                <h1>Корзина</h1>

                {
                    state.orders.length === 0 &&
                    <div className={s.absenceItems}>
                        <p>Ваша корзина пустая</p>
                        <img src={forecastSvg} alt="" />
                    </div>
                }

                <div className={s.items}>
                    {blockOrders}
                </div>

                {
                    state.orders.length !== 0
                    &&
                    <>
                        <p className={s.orderPrice}>Общая сумма заказа: {allPrice} UAH.</p>
                        <NavLink to="/checkout" className={s.checkout}>Оформить заказ &#10003;</NavLink>
                    </>
                }

            </div>
        </div>
    )
}

export default Cart;
