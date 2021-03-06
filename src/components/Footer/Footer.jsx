import React from "react";
import './Footer.css';
import mastercardSvg from '../../assets/img/mastercard.svg';
import paypalSvg from '../../assets/img/paypal.svg';
import privatSvg from '../../assets/img/privat.svg';
import visaSvg from '../../assets/img/visa.svg';
import { useSelector } from 'react-redux'

let Footer = () => {
    const state = useSelector(state => state.theme.value)
    return (
        <footer className={state === "white" ? "whiteTheme" : ""}>
            <div className="blockText1">
                <p>ReactClothes</p>
                <p>©2020, ReactClothes.com</p>
            </div>
            <div className="blockText2">
                <div>
                    <p>E-mail:</p>
                    <p>test@gmail.com</p>
                    <p>Время работы:</p>
                    <p>ПН-ПТ: 9:00 - 21:00</p>
                </div>
                <div>
                    <p>Принимаем к оплате:</p>
                    <img src={mastercardSvg} alt="" />
                    <img src={privatSvg} alt="" />
                    <img src={paypalSvg} alt="" />
                    <img src={visaSvg} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;