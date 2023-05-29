import { useNavigate } from "react-router-dom";
import { HeaderCustom } from "../components/Header/HeaderCustom"
import { DivContainerPage, DivContainerTable, TitleDiv, DivFilterContent, ReturnButton, TableHeader } from "../styles/Visitas";
import { TableCustomVisit } from "../components/Tables/Tablevisit";
import FilterDateContextProvider, { FilterTypes } from "../contexts/FilterDateContext";
import { FilterDateForm } from "../components/Form/FilterDateForm";
import { ButtonExportCsv } from "../components/Button/ButtonExportCsv";


export const Visitas = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate("/")
    }

    return(
        <DivContainerPage>
            <HeaderCustom/>
            <FilterDateContextProvider type={FilterTypes.Visit}>
                <DivContainerTable>
                    <TableHeader>
                        <TitleDiv>
                            <ReturnButton onClick={back}/>
                            <h3> Tabela visitas </h3> 
                        </TitleDiv>

                        <DivFilterContent>
                            <FilterDateForm />
                            <ButtonExportCsv />
                        </DivFilterContent>
                    </TableHeader>
                    <TableCustomVisit />
                </DivContainerTable>
            </FilterDateContextProvider>
        </DivContainerPage>

    )
}