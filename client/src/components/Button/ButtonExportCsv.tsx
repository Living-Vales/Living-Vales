import React, { useEffect, useState, useContext } from "react"
import { CSVLink,  } from "react-csv"
import api from "../../services/api"
import { FilterDateContext, FilterTypes } from "../../contexts/FilterDateContext"
import { DataExportCsvHeadersLiraReport } from "../../contents/LiraReport"
import { DataExportCsvHeadersVisit } from "../../contents/Visit"
import { DivButtonContainer } from "./ButtonExportCsvStyle"


type HeaderType = {
    label: string;
    key: string;
}

export const ButtonExportCsv = () => {

    const [data, setData] = useState([])
    const {dates} = useContext(FilterDateContext)
    const [header, setHeader] = useState<Array<HeaderType>>()
    const [filename, setFileName] = useState('')

    let defaultType: string = ''

    useEffect(() => {
        if ( dates.type === FilterTypes.ReportLira ) {
            defaultType = 'reportlira'
            setHeader( DataExportCsvHeadersLiraReport )
            setFileName('Boletins Liraa.csv')
        }

        else if ( dates.type === FilterTypes.Visit ) {
            defaultType = 'visit'
            setHeader( DataExportCsvHeadersVisit )
            setFileName('Visitas.csv')
        }
        
        const params = {'fromDate': dates.fromDate, 'toDate': dates.toDate }

        api.get('/' + defaultType, { params })
            .then((response) => {
                setData(response.data)

            })
            .catch((error) => {
                console.log("error: " + error.data)
            })
    }, [dates])

    

    return (
        <DivButtonContainer>
            <CSVLink
                title="Exportar dados para formato csv" 
                headers={header}
                data={data}
                filename={filename}
                type="button" > Exportar </CSVLink>
        </DivButtonContainer>
    )
}