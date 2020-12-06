import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import s from './Slider.module.css';

const Slider = (props) => {
    const [moving, setMoving] = useState(0);

    let arr = [];

    for (let i = 1; i < props.img.length + 1; i++) {
        arr.push(i);
    }
    let sliderImg;
    if (props.img.length === 2) {
        sliderImg = props.img.map((items, index) => (<div key={index}><img className={index === 1 ? s.reverseImg : ""} src={items} alt="" /></div>))
    } else if (typeof props.img[0] === "object") {
        sliderImg = props.img.map((items, index) => (<div key={index}><NavLink to={`/${items.id}`}><img src={items.img} alt="" /></NavLink></div>));
    }
    else {
        sliderImg = props.img.map((items, index) => (<div key={index}><img src={items} alt="" /></div>))
    }

    const dots = arr.map(dots =>
        <button
            key={`dots_${dots}`}
            className={moving / 100 + 1 === dots ? s.active : ''}
            onClick={() => setMoving(dots * 100 - 100)}
        >
        </button>
    );

    const movePrev = () => {
        if (moving >= 100) {
            setMoving(moving - 100);
        } else {
            setMoving(props.img.length * 100 - 100);
        }
    }

    const moveNext = () => {
        if (moving <= props.img.length * 100 - 200) {
            setMoving(moving + 100);
        } else {
            setMoving(0)
        }
    }

    return (
        <div className={s.slider}>
            {props.name && <h1>{props.name}</h1>}
            <button onClick={movePrev} className={s.prev} >&#10094;</button>
            <button className={s.next} onClick={moveNext}>&#10095;</button>
            <div className={s.pictures}>
                <div className={s.pic} style={{ left: -moving + "%", width: props.img.length * 100 + "%" }}>
                    {sliderImg}
                </div>
            </div>
            <div className={s.btn}>
                {dots}
            </div>
        </div>
    )
}

export default Slider;