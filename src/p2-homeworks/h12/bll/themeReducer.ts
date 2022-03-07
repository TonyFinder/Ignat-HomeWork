type changeThemeAT = {
    type: 'THEME-CHANGER'
    value: ValueType
}
export type ValueType = 'dark' | 'red' | 'some' | 'yellow'
type initStateType = {
    value: ValueType
}

const initState: initStateType = {
    value: 'some'
};

export const themeReducer = (state = initState, action: changeThemeAT): initStateType => { // fix any
    switch (action.type) {
        case "THEME-CHANGER": {
            console.log("Reducer THEME-CHANGER", action.value)
            return {...state, value: action.value};
        }
        default: return state;
    }
};

export const changeThemeAC = (value: ValueType): changeThemeAT => {
    return (
        {
            type: 'THEME-CHANGER',
            value
        }
    )
}; // fix any