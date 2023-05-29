import { DateForm, FilterButton} from "./FilterDateFormStyle"
import { FormProvider, useForm } from "react-hook-form"
import { useState, useContext } from "react";
import { FilterDateContext, Dates } from "../../contexts/FilterDateContext";
import { DateInput } from "../Input/DateInput";


export const FilterDateForm = () => {
    
    const {setDates, dates} = useContext(FilterDateContext)

    const methods = useForm()
    
    
    const [fromDate, setFromDate] = useState(dates.fromDate)
    const [toDate, setToDate] = useState(dates.toDate)

    const handleDates = () => {
        const newDates : Dates = {
            fromDate,
            toDate,
            type: dates.type
        }
        setDates(newDates)
    }

    return (
        
        <>
        <FormProvider {...methods}>
                <DateForm onSubmit={methods.handleSubmit( handleDates )} method="get" id="dateForm">
                    <DateInput 
                        id={"fromDate"}
                        onChange={(e): void => setFromDate( e.currentTarget.value )}
                        value={fromDate}
                        />
                    <h3>até</h3>
                    <DateInput 
                        id={"toDate"}
                        onChange={(e) => setToDate( e.currentTarget.value )}
                        value={toDate}
                        />
                        
                    <FilterButton 
                        form="dateForm"
                        type="submit"
                        value="Submit"
                        id="filterButton" >Filtrar</FilterButton>
                </DateForm>
        </FormProvider>
        </>
    )
}