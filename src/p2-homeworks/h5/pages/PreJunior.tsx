import React, {MouseEventHandler, useState} from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import s from './PreJunior.module.css'

function PreJunior() {
    const [collapse, setCollapse] = useState<Array<boolean>>([false, false, false, false])
    const setHandler = (hw: number) => {
        const newCollapse = [...collapse]
        newCollapse[hw - 1] = !newCollapse[hw - 1]
        setCollapse(newCollapse)
    }

    return (
        <div className={s.main}>
            <button className={s.tasks} onClick={() => setHandler(1)}>Homeworks #1</button>
            {collapse[0] && <HW1/>}
            <button className={s.tasks} onClick={() => setHandler(2)}>Homeworks #2</button>
            {collapse[1] && <HW2/>}
            <button className={s.tasks} onClick={() => setHandler(3)}>Homeworks #3</button>
            {collapse[2] && <HW3/>}
            <button className={s.tasks} onClick={() => setHandler(4)}>Homeworks #4</button>
            {collapse[3] && <HW4/>}
            {/*<HW6/>*/}
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз