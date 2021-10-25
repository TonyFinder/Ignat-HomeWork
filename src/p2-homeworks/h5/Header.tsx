import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.main}>
            {/*add NavLinks*/}
            <div className={s.square}></div>
            <div className={s.links}>
                <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
            </div>
        </div>
    )
}

export default Header
