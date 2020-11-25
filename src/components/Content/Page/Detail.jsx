import React from 'react'
import PropTypes from 'prop-types';
import Slider from './../Slider.jsx';
import s from './Detail.module.css';
import star0Svg from './../../../assets/img/star0.svg';
import star05Svg from './../../../assets/img/star05.svg';
import star1Svg from './../../../assets/img/star1.svg';
import { setOrders } from './../../../Redux/actions/cart';
import { useDispatch } from 'react-redux';


function Detail(props) {
    const dispatch = useDispatch();

    const mapColor = props.color.map((items, index) => (
        <span key={index} className={index === 0 ? s.active : ''} style={{color: items, border: `2px solid ${items}`}}>{items}</span>
    ));
    const mapSize = props.size.map((items, index) => (
        <p key={index} className={index===0 ? s.active : ''} >{items}</p>
    ));
    return (
        <div className={s.wrapp}>
            <div style = {{background: `url("${props.imgUrl}")`, backgroundSize: "cover", backgroundPosition: "center"}} className={s.fon}></div>
            <div className={s.slider}>
                <Slider img={props.sliderImg} />
            </div>
            <div className={s.info}>
            <h1>{props.name}</h1>
                <p className={s.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quidem aspernatur neque mollitia rem beatae debitis, nesciunt perferendis ipsa iusto dolor in dicta libero velit numquam, facere ad cupiditate molestiae veniam quos, inventore impedit quo? Repellendus commodi placeat nihil debitis.</p>
                <div className={s.color}>
                    {mapColor}
                </div>
                <div className={s.size}>
                    {mapSize}
                </div>
                <div className={s.score}>
                    <p>1</p>
                    <button className={s.minus}>-</button>
                    <button className={s.plus}>+</button>
                </div>
                <button onClick={() => dispatch(setOrders(props))} className={s.add}>В корзину</button>
            </div>
        </div>
    )
}

// Detail.propTypes = {

// }

export default Detail

