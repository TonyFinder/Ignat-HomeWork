import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.superInput // need to fix with (?:)
    const disabledClass = name.trim() === '' ? true : false
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div className={s.main}>
            <div>Здесь не использовал инпут из 4 урока, т.к. Error у меня boolean, но стили применил те же.</div>
            <div>
                <div>
                    <input value={name} onChange={setNameCallback} className={inputClass}
                           onKeyPress={onKeyPressHandler}/>
                    {error && <div className={s.error}>{'Title is a must'}</div>}
                </div>
                <div>
                    <SuperButton disabled={disabledClass} onClick={addUser}>add</SuperButton>
                    <span>{totalUsers}</span>
                </div>
            </div>
        </div>
    )
}

export default Greeting
