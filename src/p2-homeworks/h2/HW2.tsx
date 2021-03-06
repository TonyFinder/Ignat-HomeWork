import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "low" | "middle" | "high" // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'Anime', priority: 'low'},
    {_id: 3, name: 'Games', priority: 'low'},
    {_id: 4, name: 'Work', priority: 'high'},
    {_id: 5, name: 'Html & css', priority: 'middle'}
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === "low") return affairs.filter(f => f.priority === "low") // need to fix
    else if (filter === "middle") return affairs.filter(f => f.priority === "middle") // need to fix
    else if (filter === "high") return affairs.filter(f => f.priority === "high")
    else return affairs// need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter( f => f._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2
