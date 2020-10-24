import React from 'react';
import './Clothes.css';


const BlockClothes = () => {
    return (
        <div className="blockClothes">
            <img alt="" />
            <p className="name">Nike 3000</p>
            <button className="">В корзину</button>
            <button className="">Подробнее</button>
            <div className="info">
                <div className="size">

                </div>

                <div className="color">
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}

const Clothes = () => {
    return (
        <BlockClothes />
    )
}

export default Clothes;
