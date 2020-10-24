import React, { useState, useEffect } from 'react';
import s from './StartPage.module.css';

const Slider = () => {

    const [moving, setMoving] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setMoving(moving + 100)
    //     }, 1000);
    // }, [])
    
    const arr = [1, 2, 3, 4, 5];
    const dots = arr.map( dots =>
         <button 
         key={`dots_${dots}`}
         className={moving / 100 + 1 === dots ? s.active : ''}
         onClick={() => setMoving(dots * 100 - 100)}
         >
         </button>
    );

    const movePrev = () => {
        if (moving >= 200) {
            setMoving(moving - 100);
        } else {
            setMoving(0);
        }
        console.log(moving)
    }

    const moveNext = () => {
        if (moving <= 300) {
            setMoving(moving + 100);
        } else {
            setMoving(0)
        }
    }

    return (
        <div className={s.slider}>
            <h1>Выгодные предложения</h1>
            <button onClick={movePrev} className={`${s.prev} ${s.show}`} >&#10094;</button>
            <button className={s.next} onClick={moveNext}>&#10095;</button>
            <div className={s.pictures}>
                <div style={{ left: -moving + "%" }}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61Ez19M9BZL._AC_UY1000_.jpg" alt="" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg" alt="" />
                    <img src="https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682" alt="" />
                    <img src="https://rukminim1.flixcart.com/image/714/857/k1i6ikw0/shoe/r/m/g/bq3204-002-7-nike-black-white-anthracite-original-imafh2hv38ygyyfy.jpeg?q=50" alt="" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/612er1YVNQL._AC_SX522_.jpg" alt="" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61Ez19M9BZL._AC_UY1000_.jpg" alt="" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg" alt="" />
                    <img src="https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682" alt="" />
                    <img src="https://rukminim1.flixcart.com/image/714/857/k1i6ikw0/shoe/r/m/g/bq3204-002-7-nike-black-white-anthracite-original-imafh2hv38ygyyfy.jpeg?q=50" alt="" />
                    <img src="https://images-na.ssl-images-amazon.com/images/I/612er1YVNQL._AC_SX522_.jpg" alt="" />
                </div>
            </div>
            <div className={s.btn}>
                {dots}
            </div>
        </div>
    )
}


const StartPage = () => {
    return (
        <div className={s.wrapper}>
            <img src="" alt="" className={s.fon} />

            <Slider />

            <div className={s.tagline}>
                <h1>Жизнь в движении</h1>
            </div>
        </div>
    )
}

export default StartPage;
