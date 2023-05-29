import { useNavigate } from "react-router-dom"
import { HeaderCustom } from "../components/Header/HeaderCustom";
import { DivContainerPage, DivContainerMap, MapHeader, TitleDiv, ReturnButton, DivFilterContent } from "../styles/MapPageStyles";
import { MapComponent } from "../components/Maps/MapComponent";
import { FilterDateForm } from "../components/Form/FilterDateForm";
import FilterDateContextProvider, { FilterTypes } from "../contexts/FilterDateContext";

export const MapPage = () => {
    const navigate = useNavigate();
    
    const back = () => {
        navigate("/")
    }

    return (
        <>
            <DivContainerPage>
                <HeaderCustom />
                <FilterDateContextProvider type={FilterTypes.Map}>
                    <DivContainerMap>
                        <MapHeader>
                            <TitleDiv>
                                <ReturnButton onClick={back}/>
                                <h3> Mapa de incidência do mosquito</h3> 
                            </TitleDiv>
                        <DivFilterContent >
                            <FilterDateForm />
                        </DivFilterContent>
                        </MapHeader>
                        <MapComponent />
                    </DivContainerMap>
                </FilterDateContextProvider>
            </DivContainerPage>
        
        
        </>
    )
}