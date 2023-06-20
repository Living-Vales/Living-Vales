import "leaflet/dist/leaflet.css"
import ic_location from "./../../assets/ic_location.png"
import { useContext, useEffect, useState } from "react"
import { DivContainer } from "./MapComponentStyles";
import  api  from "../../services/api";
import { FilterDateContext } from "../../contexts/FilterDateContext";
import { format } from "date-fns";
import { MapContainer, TileLayer, Tooltip, Marker } from "react-leaflet";
import { DivIcon, Icon, Point } from "leaflet"
import { generateKey } from "../../utilities/KeyGenerator"

type DataType = {
    latitude: number,
    longitude: number,
    id: string,
    data: string,
}

export const MapComponent = () => {

    const [data, setData] = useState<Array<DataType>>([]);
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

    const customIcon: DivIcon = new Icon({
        iconUrl: ic_location,
        iconSize: new Point(32, 35)

    })
    
    return (
        <DivContainer >
            <MapContainer center={[-29.462047, -51.967300]} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    data.map( ( element: any ) => {
                        return (
                            <Marker position={[element.latitude, element.longitude]} icon={customIcon} key={generateKey()}>
                                <Tooltip direction="top" key={generateKey()}>
                                    { format( new Date( element.data ), 'dd/MM/yyyy' ) }
                                </Tooltip >
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </DivContainer>
    )

}
