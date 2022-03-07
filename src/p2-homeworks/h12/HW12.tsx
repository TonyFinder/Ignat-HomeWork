import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC, ValueType} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some', 'yellow'];

function HW12() {
    // const theme = 'some'; // useSelector
    let dispatch = useDispatch()
    let theme = useSelector<AppStoreType, ValueType>(state => state.theme.value)

    // useDispatch, onChangeCallback
    const onChangeCallback = (value: ValueType) => dispatch(changeThemeAC(value))

    return (
        <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                TESTING THEMES
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

        </div>
    );
}

export default HW12;
