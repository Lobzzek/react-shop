import React, { useState, useEffect, ReactDOM, useRef } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './../../Redux/actions/search'
import cartSvg from '../../assets/img/cart.svg';
import userSvg from '../../assets/img/user.svg'
import settingsSvg from '../../assets/img/settings.svg'
import searchSvg from '../../assets/img/search.svg'
import {setTheme} from './../../Redux/actions/theme'
import classNames  from 'classnames'

const Header = (props) => {

    const state = useSelector(state => {
        return {
            countItems: state.cart.countItems,
            search: state.search.value,
            clothes: state.clothes.items,
            theme: state.theme.value
        }
    });
    const dispatch = useDispatch();

    //animation
    const [showForm, setShowForm] = useState(true);
    const changeStateForm = () => setShowForm(!showForm);
    
    

    const [showPopup, setShowPopup] = useState(false);
    const changeStatePopup = () => setShowPopup(!showPopup);

    let [showResult, setShowResult] = useState(false);

    const [showLinks, setShowLinks] = useState(false);
    const changeStateLinks = () => setShowLinks(!showLinks);

    const [scroll, setScroll] = useState(0);
    const updatesScroll = () => {
        setScroll(window.scrollY);
    }

    const result = useRef();

    useEffect(() => {
        window.addEventListener("scroll", updatesScroll);
    }, [])

    // search
    const input = React.useRef();
    const changeState = () => {
        let value = input.current.value;
        dispatch(setSearch(value));
    }
    const mapResult = () => {
        let result = [];
        let regexp = new RegExp(`^${state.search}`, "i")
        let found = state.clothes.filter(el => el.name.match(regexp) || el.id === (state.search !== "" ? Number(state.search) : undefined));
        result.push(...found);
        let mapResult = result.map((items, index) => (<NavLink to={`/${items.id}`} key={index}>
            <img src={items.imgUrl} alt="" />
            <p>{items.name}</p>
        </NavLink>))
        return mapResult;
    }

    const checkbox = React.useRef();
    
    const changeTheme = () => {
        if(state.theme === 'black'){
            dispatch(setTheme("white"))
        }else{
            dispatch(setTheme("black"))
        }    
    }
    return (
        // `${scroll > 99 ? 'scrolled' : ' '}`
        <header className={classNames("",
            {"scrolled": scroll > 99},
            {"whiteTheme": state.theme === "white"}
        )}>
            <div className='logo'>
                <NavLink to="/">
                    <h1>ReactClothes</h1>
                </NavLink>
                <div className={`line ${scroll > 99 ? 'scrolled' : ' '}`}></div>
            </div>
            <nav>
                <button onClick={() => window.scroll(0, 0)} className={`moving ${scroll > 99 ? 'scrolled' : ' '}`}>&uarr;</button>
                <div onClick={changeStateLinks} className={showLinks ? "links active" : "links"}>
                    <NavLink activeClassName="chosen" to="/cap">ГОЛОВНЫЕ УБОРЫ</NavLink>
                    <NavLink activeClassName="chosen" to="/shirts">РУБАШКИ</NavLink>
                    <NavLink activeClassName="chosen" to="/t-shirts">ФУТБОЛКИ</NavLink>
                    <NavLink activeClassName="chosen" to="/backpacks">РЮКЗАКИ</NavLink>
                    <NavLink activeClassName="chosen" to="/trousers">ШТАНЫ</NavLink>
                    <NavLink activeClassName="chosen" to="/trainers">КРОССОВКИ</NavLink>
                    <NavLink activeClassName="chosen" to="/accessories">АКСЕССУАРЫ</NavLink>
                </div>
                <div onClick={changeStateLinks} className="menu">
                    <div></div>
                </div>
                <div>
                    <button className="search">
                        <input onBlur={() => setShowResult(showResult = false)} onFocus={() => setShowResult(showResult = true)} ref={input} onChange={changeState} placeholder="Название или id" className={showForm ? 'active' : ''} type="text" />
                        <img onClick={changeStateForm} src={searchSvg} alt="" />
                        <div ref={result} className={showResult ? "result active" : "result"}>
                                {mapResult()}
                        </div>
                    </button>
                    <button className="user" onClick={props.changeForm}>
                        <img src={userSvg} alt="" />
                    </button>
                    <button onClick={props.changeCart} href="#" className="cart">
                        <img src={cartSvg} alt="" />
                        {
                            state.countItems && <span className="count">{state.countItems}</span>
                        }
                    </button>
                    <button href="#" className="settings">
                        <div className={showPopup ? "popup active" : "popup"}>
                            <NavLink to="/we" href="#">О нас</NavLink>
                            <NavLink to="/help" href="#">Помощь</NavLink>
                            <label className="switch">
                                <input onClick={changeTheme} ref={checkbox} type="checkbox" /> 
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <img onClick={changeStatePopup} src={settingsSvg} alt="" className={showPopup ? "active" : ""} />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
