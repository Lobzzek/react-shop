import React, {useState, useEffect, ReactDOM} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import cartSvg from '../../assets/img/cart.svg';
import userSvg from '../../assets/img/user.svg'
import settingsSvg from '../../assets/img/settings.svg'
import searchSvg from '../../assets/img/search.svg'

const Header = (props) =>{

    const state = useSelector(state => state.cart.countItems);

    const [showForm, setShowForm] = useState(false);
    const changeStateForm = () => setShowForm(!showForm);
    
    const [scroll, setScroll] = useState(0);
    const updatesScroll = () =>{
        setScroll(window.scrollY);
    }
    // useEffect(() => {
    //     window.addEventListener("scroll", updatesScroll);
    // }, [])
    
    return (
        <header className={`${scroll > 99 ? 'scrolled' : ' '}`}>
            <div className='logo'>
                <NavLink to="/">
                    <h1>ReactClothes</h1>
                </NavLink>
                <div className={`line ${scroll > 99 ? 'scrolled' : ' '}`}></div>
            </div>
            <nav>
                <div>
                    <NavLink to="/cap">ГОЛОВНЫЕ УБОРЫ</NavLink>
                    <NavLink to="/shirts">РУБАШКИ</NavLink>
                    <NavLink to="/t-shirts">ФУТБОЛКИ</NavLink>
                    <NavLink to="/backpacks">РЮКЗАКИ</NavLink>
                    <NavLink to="/trousers">ШТАНЫ</NavLink>
                    <NavLink to="/trainers">КРОССОВКИ</NavLink>
                    <NavLink to="/accessories">АКСЕССУАРЫ</NavLink>
                </div>
                <div>
                    <button className="search">
                        <input className={showForm ? 'active' : ''} type="text" />
                        <img onClick={changeStateForm} src={searchSvg} alt="" />
                    </button>
                    <button className="user" onClick={props.changeForm}>
                        <img src={userSvg} alt="" />
                    </button>
                    <button onClick={props.changeCart} href="#" className="cart">
                        <img src={cartSvg} alt="" />
                        {
                            state && <span className="count">{state}</span>
                        }
                    </button>
                    <button href="#" className="settings">
                        <img src={settingsSvg} alt="" />
                    </button>
                </div>
                <button onClick={() => window.scroll(0, 0)} className={`moving ${scroll > 99 ? 'scrolled' : ' '}`}>RC</button>
            </nav>
        </header>
    )
}

export default Header;
