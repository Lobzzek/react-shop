import React, { useState, useEffect } from "react";
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Header, Footer, Content, Cart, User, Checkout } from "./components";
// import { Route } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { setClothes } from './Redux/actions/clothes';
import { setImgSlider } from './Redux/actions/imgSlider'

const App = () => {
  //animation
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const changeForm = () => setShowForm(!showForm);
  const changeCart = () => setShowCart(!showCart);
  const hideCartAndForm = () => {
    setShowForm(false);
    setShowCart(false);
  };

  const [scroll, setScroll] = useState(0);
  const updatesScroll = () => {
    setScroll(window.scrollY);
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", updatesScroll);
  // }, [])


  //get data of fake server (JSON file)
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then(rest => rest.json())
      .then(json => {
        dispatch(setClothes(json.clothes));
        dispatch(setImgSlider(json.imgSlider));

      }) 
  }, [])


  return (
    <div className="wrapper">
      <Header changeForm={changeForm} changeCart={changeCart} />
      <div className="emptySpace"></div>
      <div className="content">
        <Content />
      </div>

      <aside>
        <div
          onClick={hideCartAndForm}
          className={`fon ${showForm || showCart ? "active" : ""}`}
        >
          {showForm && <p>&#10006;</p>}
        </div>
        <TransitionGroup>
          {showForm && (
            <CSSTransition
              in={showForm}
              timeout={600}
              classNames="animationCenter"
              unmountOnExit
            >
              <User />
            </CSSTransition>
          )}

          {showCart && (
            <CSSTransition
              in={showCart}
              timeout={600}
              classNames="animationRight"
              unmountOnExit
            >
              <Cart />
            </CSSTransition>
          )}
        </TransitionGroup>
      </aside>

      <Footer />
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     blockClothes: state.clothes.items,
//     blockOrders: state.cart.items,
//     imgSlider: state.imgSlider.items,
//   }
// }

export default App;
