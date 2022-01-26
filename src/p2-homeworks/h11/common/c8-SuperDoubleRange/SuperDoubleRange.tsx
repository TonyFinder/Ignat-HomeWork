import React, {ChangeEvent} from 'react'
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value1: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value1

        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };

    // @ts-ignore
    return (
        <div>
            <Slider
                style={{width: "180px"}}
                value={value1}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // disableSwap
            />
        </div>
    )
}

export default SuperDoubleRange
