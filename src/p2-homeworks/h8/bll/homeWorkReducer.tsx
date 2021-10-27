import {UserType} from '../HW8';

export type SortAT = {
    type: 'sort'
    payload: string
}
export type CheckAT = {
    type: 'check'
    payload: number
}
export type AllReducerAT = SortAT | CheckAT

export const homeWorkReducer = (state: UserType[], action: AllReducerAT): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const endState = [...state]
            action.payload === 'up' ? endState.sort((a, b) => a.name > b.name ? 1 : -1) : endState.sort((a, b) => a.name > b.name ? -1 : 1)
            return endState
        }
        case 'check': {
            return state.filter(age => age.age > action.payload)
        }
        default: return state
    }
}