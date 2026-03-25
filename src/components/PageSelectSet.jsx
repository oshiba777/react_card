import React from 'react';
import { Header } from './Header';
import { BtnSet } from './BtnSet';
import cards from "../data.json";

export function PageSelectSet() {
    const set = cards.reduce(
        (acc, item) => {
            if ( acc.map[item.setName])
                return acc;
            acc.map[item.back.setName] = true;
            acc.set.push(item.setName);
            return acc;
        },
        {
            map:{},
            sets:[],
        }
    ).sets.map((item, index)=>
    )
    return <div>
        <Header />
        <h2> Выбор сетов</h2>
        <div>
            <button className='vibor'>English</button>
            <button className='vibor'>fruit</button>
        </div>
    </div>;
}
