import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import styles from './Request.module.css'
import {useEffect, useState} from 'react';
import {RequestAPI} from '../api/requestAPI';

export const RequestUseEffect = () => {
    const [response, setResponse] = useState<any>(null)
    const [checkbox, setCheckbox] = useState<boolean>(false)
    const [checkboxValueToAPI, setCheckboxValueToAPI] = useState<boolean | null>(null)

    const checkboxChanger = () => setCheckbox(!checkbox)
    const onClickHandler = () => setCheckboxValueToAPI(checkbox)

    useEffect(() => {
        if (checkboxValueToAPI !== null) {
            RequestAPI.updateCheckbox(checkbox)
                .then(info => setResponse(info))
                .catch(errorText => setResponse(errorText))
        }
    }, [checkboxValueToAPI])

    return <div className={styles.container}>
        <h2>Request using useEffect</h2>
        <div className={styles.main}>
            <SuperCheckbox checked={checkbox} onClickChecked={checkboxChanger}/>
            <SuperButton onClick={onClickHandler}>Click me</SuperButton>
        </div>
        <div className={styles.response}>{JSON.stringify(response)}</div>
    </div>
}