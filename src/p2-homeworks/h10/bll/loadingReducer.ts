type loadingAT = {
    type: 'LOADING'
    loading: boolean
}

type initStateType = {
    loading: boolean
}

const initState: initStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): loadingAT => {
    return (
        {
            type: 'LOADING',
            loading
        }
    )
}