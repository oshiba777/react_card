import React from 'react';
import { Header } from './Header';
import { Link, Outlet } from 'react-router-dom';
import './FormCreate.css'

export function PageCreateSet() {
    return <div>
        <Header />
        <h2> Создание сета карточек</h2>
        <ul className='adm-panel'>
            <Link className='adm-panel__btn' to='/admin/createset' > Создать сет </Link>
            <Link className='adm-panel__btn' to='/admin/createcard'> Создать карточку </Link>
        </ul>
        <Outlet/>
    </div>;
} 