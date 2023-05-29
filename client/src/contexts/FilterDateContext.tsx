import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react"
import { fromDateInitialText, toDateInitialText } from "../utilities/CurrentDateGenerator"

export enum FilterTypes {
    ReportLira = 'report_liraa',
    Visit = 'visit',
    Map = 'map'
}

export type Dates = {
    toDate: string,
    fromDate: string,
    type: string
}

export interface DatesContextInterface {
    dates: Dates,
    setDates: Dispatch<SetStateAction<Dates>>
}

type FilterDateContextProps = {
    children: ReactNode,
    type: string,
    fromDate?: string,
    toDate?: string
}

const defaultState = {
    dates: {
        toDate: '',
        fromDate: '',
        type: ''
    },
    setDates: (dates: Dates) => {}
} as DatesContextInterface

export const FilterDateContext = createContext<DatesContextInterface>(defaultState)

export default function FilterDateContextProvider ({children, type}: FilterDateContextProps) {

    const [dates, setDates] = useState<Dates>({
        fromDate: fromDateInitialText,
        toDate: toDateInitialText,
        type
    })
    
    return (
        <FilterDateContext.Provider value={{dates, setDates}}>
            {children}
        </FilterDateContext.Provider>
    )
}
