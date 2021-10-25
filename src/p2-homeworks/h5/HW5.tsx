import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from 'react-router-dom';
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.main}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
