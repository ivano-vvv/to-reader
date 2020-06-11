import React from 'react';
import './categories-filter.css';
import { NavLink } from 'react-router-dom';

export default function CategoriesFilter(props) {
    return (
        <div className="categories-filter">
            <NavLink to='/first' className='categories-filter__item' activeClassName='categories-filter__item_active'>В первую очередь</NavLink>
            <span className='categories-filter__divider'>|</span>
            <NavLink to='/not-read' className='categories-filter__item' activeClassName='categories-filter__item_active'>Непрочитанное</NavLink>
            <span className='categories-filter__divider'>|</span>
            <NavLink to='/read' className='categories-filter__item' activeClassName='categories-filter__item_active'>Прочитанное</NavLink>
            <span className='categories-filter__divider'>|</span>
            <NavLink to='/all' className='categories-filter__item' activeClassName='categories-filter__item_active'>Все</NavLink>
        </div>
    )
}
