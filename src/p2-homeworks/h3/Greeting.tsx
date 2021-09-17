import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
    const inputClass = name.trim() === '' ? s.error : '' // need to fix with (?:)
    const disabledClass = name.trim() === '' ? true : false
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <button disabled={disabledClass} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorText}>{'Title is required for this field'}</div>}
        </div>
    )
}

export default Greeting
