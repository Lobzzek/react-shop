import React from 'react';
import s from './Cart.module.css';
import OrderBlock from './OrderBlock.jsx';
import forecastSvg from './../../assets/img/forecast.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeOrder } from './../../Redux/actions/cart';
import { increment } from './../../Redux/actions/cart';
import { decrement } from './../../Redux/actions/cart';
import { NavLink } from 'react-router-dom';



const Cart = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return {
            orders: state.cart.items,
        }
    });

    const blockOrders = state.orders.map((item, index) => (
        <OrderBlock color={state.orders.selectedColor} size={state.orders.selectedSize} decrement={() => dispatch(decrement(item))} increment={() => dispatch(increment(item))}  removeOrder={() => dispatch(removeOrder(item.id))} {...item} key={`${item.name}_${item.id}_${index}`} />
    ));
    let allPrice = 0;
    state.orders.map(item => {
        allPrice = allPrice + (item.price * item.score);
    })
    return (
        <div className={s.wrapper}>
            <div className={s.body}>
                <button onClick={props.closeCart} className={s.closeCart}>&#10540;</button>
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
