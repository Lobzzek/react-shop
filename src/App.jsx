import React, { useState, useEffect } from "react";
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Header,
  Footer,
  StartPage,
  Clothes,
  Cart,
  User,
  Checkout,
} from "./components";

const fon = React.createRef();

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const changeForm = () => setShowForm(!showForm);
  const changeCart = () => setShowCart(!showCart);
  const hideCartAndForm = () => {
    setShowForm(false);
    setShowCart(false);
  };

  return (
    <div className="wrapper">
      <div
        onClick={hideCartAndForm}
        className={`fon ${showForm || showCart ? "active" : ""}`}
      >
        {showForm && <p>&#10006;</p>}
      </div>
      <Header changeForm={changeForm} changeCart={changeCart} />
      <div className="content">
        <StartPage />

        {/* <Checkout /> */}

        <TransitionGroup>
          {showForm && (
            <CSSTransition
              in={showForm}
              timeout={600}
              classNames="animationCenter"
            >
              <User />
            </CSSTransition>
          )}

          {showCart && (
            <CSSTransition
              in={showCart}
              timeout={600}
              classNames="animationRight"
            >
              <Cart />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
};

export default App;
