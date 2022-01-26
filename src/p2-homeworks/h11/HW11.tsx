import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandlerDouble = (value: number[]) => {
        if (value[0] <= value2) setValue1(value[0])
        if (value[1] >= value1) setValue2(value[1])
    }
    const onChangeHandlerSingle = (value: number) => {
        if (value <= value2) setValue1(value)
    }

    return (
        <div className={s.main}>
            {/*should work (должно работать)*/}
            <span className={s.attention}>Не разобрался с пересечением ползунков у верхнего инпута из Material UI, позже постараюсь вернуться к данному вопросу</span>
            <div className={s.blocks}>
                <span className={s.text}>{value1}</span>
                <SuperDoubleRange onChangeRange={onChangeHandlerDouble}  value1={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.text}>{value2}</span>
            </div>
            <div className={s.blocks}>
                <span className={s.text}>{value1}</span>
                <SuperRange onChangeRange={onChangeHandlerSingle} value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
