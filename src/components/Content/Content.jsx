import React from 'react';
import { Route } from 'react-router-dom'
import StartPage from './Page/StartPage.jsx';
import Clothes from './Page/Clothes.jsx';
import { useSelector } from 'react-redux';
import Checkout from './../Cart/Checkout.jsx'
import We from './Page/We.jsx'
import Help from './Page/Help.jsx'

function Content() {
    const state = useSelector(state => {
        return {
            clothes: state.clothes.items,
            imgSlider: state.imgSlider.items,
            orders: state.cart.items,
        }
    });
    return (
        <>
            <Route exact path="/help" component={Help} /> 
            <Route exact path="/we" component={We} /> 
            <Route exact path="/checkout" render={() => (<Checkout items={state.orders}  />)} />
            <Route exact path="/" render={() => (<StartPage imgSlider={state.imgSlider} /> ) } />
            <Route path="/" render={() => ( <Clothes items={state.clothes} /> ) } />
        </>
    )
}

export default Content;
