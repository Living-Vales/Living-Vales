import { useNavigate } from "react-router-dom";
import { TablevbLira } from "../components/Tables/TablevbLira"
import { HeaderCustom } from "../components/Header/HeaderCustom"
import { DivContainerPage, DivContainerTable, TitleDiv, DivFilterContent, ReturnButton, TableHeader } from "../styles/VisitasBLira"
import { FilterDateForm } from "../components/Form/FilterDateForm";
import FilterDateContextProvider, { FilterTypes } from "../contexts/FilterDateContext";
import { ButtonExportCsv } from "../components/Button/ButtonExportCsv";


export const VisitasBLira = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate("/")
    }

    return(
        <DivContainerPage>
            <HeaderCustom/>
            <FilterDateContextProvider type={FilterTypes.ReportLira}>
                <DivContainerTable>
                    <TableHeader>
                        <TitleDiv>
                            <ReturnButton onClick={back}/>
                            <h3> Visitas do Boletim LIRAA</h3>
                        </TitleDiv>
                        
                        <DivFilterContent>
                            <FilterDateForm />
                            <ButtonExportCsv />
                        </DivFilterContent>
                    </TableHeader>
                    <TablevbLira />
                </DivContainerTable>
            </FilterDateContextProvider>
        </DivContainerPage>

    )
}