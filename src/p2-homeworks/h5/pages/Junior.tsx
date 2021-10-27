import React, {useState} from 'react'
import s from './Junior.module.css';
import HW7 from '../../h7/HW7';

function Junior() {
    const [collapse, setCollapse] = useState<Array<boolean>>([false])
    const setHandler = (hw: number) => {
        const newCollapse = [...collapse]
        newCollapse[hw - 1] = !newCollapse[hw - 1]
        setCollapse(newCollapse)
    }

    return (
        <div className={s.main}>
            <button className={s.tasks} onClick={() => setHandler(1)}>Homeworks #7</button>
            {collapse[0] && <HW7/>}
        </div>
    )
}

export default Junior