import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Routes';

function Header() {
    return (
        <div>
            {/*add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}> Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}> Junior-Plus</NavLink>
        </div>
    )
}

export default Header
