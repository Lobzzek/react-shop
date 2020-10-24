import React, {useState, useEffect, ReactDOM} from 'react';
import './Header.css';

const Header = (props) =>{

    const [scroll, setScroll] = useState(0);
    const updatesScroll = () =>{
        setScroll(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", updatesScroll);
    }, [])
    
    return (
        <header className={`${scroll > 99 ? 'scrolled' : ' '}`}>
            <div className='logo'>
                <h1>ReactClothes</h1>
                <div className={`line ${scroll > 99 ? 'scrolled' : ' '}`}></div>
            </div>
            <nav>
                <div>
                    <a href="#">КЕПКИ</a>
                    <a href="#">ШАПКИ</a>
                    <a href="#">РУБАШКИ</a>
                    <a href="#">ФУТБОЛКИ</a>
                    <a href="#">РЮКЗАКИ</a>
                    <a href="#">ШТАНЫ</a>
                    <a href="#">КРОССОВКИ</a>
                    <a href="#">АКСЕССУАРЫ</a>
                </div>
                <div>
                    <button className="user" onClick={props.changeForm}>
                        <img src="./img/user.svg" alt="" />
                    </button>
                    <button onClick={props.changeCart} href="#" className="cart">
                        <img src="./img/cart.svg" alt="" />
                    </button>
                </div>
                <button onClick={() => window.scroll(0, 0)} className={`moving ${scroll > 99 ? 'scrolled' : ' '}`}>RC</button>
            </nav>
        </header>
    )
}

export default Header;
