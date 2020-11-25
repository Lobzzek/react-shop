import React from 'react';
import { Route } from 'react-router-dom'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BlockClothes from './../BlockClothes';
import Detail from './Detail.jsx'
import s from './Clothes.module.css'


function Clothes(props) {
    const blockItems = (value, arr = props.items) => {
        let newArr = [];
        arr.map(i => {
            if (i.type === value) {
                newArr.push(i)
            }
        })
        return newArr.map((c, index) => <BlockClothes key={`${c.name}_${index}`} {...c} />);
    }

    const blocksDetails = props.items.map((items, index) => (<Route key={index} path={`/${items.id}`} render = {() => <Detail {...items} />} />) )

    const path = [
        { path: "cap" },
        { path: "shirts" },
        { path: "t-shirts" },
        { path: "backpacks" },
        { path: "trousers" },
        { path: "trainers" },
        { path: "accessories" },
    ]

    const blockRoute = path.map((path, index) => (<Route key={index} exact path={`/${path.path}`} render={() => blockItems(`${path.path}`)} />))

    return (
        <div>
            { blocksDetails}
            <div className={s.blockContainer}>
                {blockRoute}
            </div>
        </div>
    )
}

export default Clothes;
