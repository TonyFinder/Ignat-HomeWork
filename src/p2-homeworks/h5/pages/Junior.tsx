import React, {useState} from 'react'
import s from './Junior.module.css';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from '../../h10/HW10';

function Junior() {
    const [collapse, setCollapse] = useState<Array<boolean>>([false, false, false, false])
    const setHandler = (hw: number) => {
        const newCollapse = [...collapse]
        newCollapse[hw - 1] = !newCollapse[hw - 1]
        setCollapse(newCollapse)
    }

    return (
        <div className={s.main}>
            <button className={s.tasks} onClick={() => setHandler(1)}>Homeworks #7</button>
            {collapse[0] && <HW7/>}
            <button className={s.tasks} onClick={() => setHandler(2)}>Homeworks #8</button>
            {collapse[1] && <HW8/>}
            <button className={s.tasks} onClick={() => setHandler(3)}>Homeworks #9</button>
            {collapse[2] && <HW9/>}
            <button className={s.tasks} onClick={() => setHandler(4)}>Homeworks #10</button>
            {collapse[3] && <HW10/>}
        </div>
    )
}

export default Junior;