import React from 'react'
import s from './OrderBlock.module.css';

const OrderBlock = (props) => {
    const mapColor = props.color.map((items, index) => (
        <span key={index} style={ {color: items, border: `2px solid ${items}`} } className={index === 0 ? s.active : ''}>{items}</span>
    ));
    const mapSize = props.size.map((items, index) => (
        <p key={index} className={index === 0 ? s.active : ''} >{items}</p>
    ));
    return (
        <>
        <div className={s.blockItem}>
            <div className={s.pic}>
                <button onClick={props.onClick}  className={s.close}>&#10540;</button>
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
                    <button className={s.minus}>-</button>
                    <button className={s.plus}>+</button>
                </div>
                <div className={s.price}>{props.price} UAH.</div>
            </div>
        </div>
        </>
    )
}

export default OrderBlock;
