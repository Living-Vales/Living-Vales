import React, { useContext, useEffect, useState } from "react"
import { DivContainer } from "./MapComponentStyles";
import { Map, Marker , ZoomControl} from "pigeon-maps"
import { generateKey } from "../../utilities/KeyGenerator"
import  api  from "../../services/api";
import { FilterDateContext } from "../../contexts/FilterDateContext";

export const MapComponent = () => {

    const [data, setData] = useState([]);
    const {dates} = useContext(FilterDateContext)

    useEffect(() => {

        const params = {'fromDate' : dates.fromDate, 'toDate': dates.toDate }
        
        api.get('/visit/locations', {params}
        ).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log('error: ' + error.data)
        })
        
    }, [dates])
    
    return (
        <>
            <DivContainer>
                <Map height={750} defaultCenter={[-29.462047, -51.967300]} defaultZoom={13}>
                    {
                        data.map((data: any) => {
                            return (
                                <Marker key={generateKey()} width={30} anchor={[data.latitude, data.longitude]} color="red"/>
                            )
                        })
                    }
                    <ZoomControl />
                </Map>
            </DivContainer>

        
        </>
    )
}