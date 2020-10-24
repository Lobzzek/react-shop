import React from "react";
import './Footer.css'

let Footer = () => {
    return (
        <footer>
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
                    <img src="./img/mastercard.svg" alt="" />
                    <img src="./img/privat.svg" alt="" />
                    <img src="./img/paypal.svg" alt="" />
                    <img src="./img/visa.svg" alt="" />
                </div>
            </div>
            <h3>*Тестовый сайт*</h3>
        </footer>
    )
}

export default Footer;