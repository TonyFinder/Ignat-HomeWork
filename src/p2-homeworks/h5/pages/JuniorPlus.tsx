import React, {useState} from 'react'
import HW12 from '../../h12/HW12';
import s from './JuniorPlus.module.css';
import {HW13} from '../../h13/HW13';

function JuniorPlus() {
    const [collapse, setCollapse] = useState<Array<boolean>>([false, false])
    const setHandler = (hw: number) => {
        const newCollapse = [...collapse]
        newCollapse[hw - 1] = !newCollapse[hw - 1]
        setCollapse(newCollapse)
    }

    return (
        <div className={s.main}>
            <button className={s.tasks} onClick={() => setHandler(1)}>Homeworks #12</button>
            {collapse[0] && <HW12/>}
            <button className={s.tasks} onClick={() => setHandler(2)}>Homeworks #13</button>
            {collapse[1] && <HW13/>}
        </div>
    )
}

export default JuniorPlus