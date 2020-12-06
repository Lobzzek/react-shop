import React from 'react'
import s from './OrderBlock.module.css';
import { setColor, setSize } from './../../Redux/actions/cart';
import { useDispatch } from 'react-redux'

const OrderBlock = (props) => {
    const dispatch = useDispatch();
    const mapColor = props.color.map((item, index) => (
        <span onClick={() => dispatch(setColor(props.id, item))} key={index} style={{ color: item, border: `2px solid ${item}`}} className={props.selectedColor === item ? s.active : ''}>{item}</span>
    ));
    const mapSize = props.size.map((item, index) => (
        <p onClick={() => dispatch(setSize(props.id, item))} key={index} className={props.selectedSize === item ? s.active : ''} >{item}</p>
    ));
    return (
        <>
        <div className={s.blockItem}>
            <div className={s.pic}>
                <button onClick={props.removeOrder}  className={s.close}>&#10540;</button>
                <img src={props.imgUrl} alt=""></img>
            </div>
            <div className={s.info}>
                <p className={s.name}>{props.name}</p>
                <div className={s.color}>
                    {mapColor}
                </div>
                <div className={s.size}>
                    {mapSize}
                </div>
                <div className={s.score}>
                    <p>{props.score}</p>
                    <button onClick={props.decrement} className={s.minus}>-</button>
                    <button onClick={props.increment} className={s.plus}>+</button>
                </div>
                <div className={s.price}>{props.price} UAH.</div>
            </div>
        </div>
        </>
    )
}

export default OrderBlock;
