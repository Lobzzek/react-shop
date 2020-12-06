import React from 'react';
import s from './BlockClothes.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setOrders } from './../../Redux/actions/cart.js';
import { useDispatch } from 'react-redux';

const BlockClothes = (props) => {
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
        <div className={s.blockClothes}>
            <div className={s.imgPrice}>
                <img src={`${props.imgUrl}`} />
                <p className={s.price}>{props.price} UAH.</p>
            </div>
            <p className={s.name}>{props.name}</p>
                <button onClick={() => dispatch(setOrders(props))}  className={s.button}>В корзину</button>
                <NavLink className={s.button} to={`/${props.id}`} >Подробнее</NavLink>
        </div>
    </div>
    )
}

BlockClothes.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.array.isRequired,
    size: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}

export default BlockClothes;