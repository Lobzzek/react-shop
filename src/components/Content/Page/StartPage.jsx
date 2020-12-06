import React from 'react';
import s from './StartPage.module.css';
import Slider from './../Slider.jsx'


const StartPage = (props) => {
    return (
        <div className={s.wrapper}>
            <img src="" alt="" className={s.fon} />
            <div className={s.slider}>
                <Slider name="Вкусные предложения" img={props.imgSlider} />
            </div>
            <div className={s.tagline}>
                <h1>Жизнь в движении</h1>
            </div>
        </div>
    )
}

export default StartPage;
