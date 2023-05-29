import api from "../../services/api";
import { ContentContainer, TableCustomStyle, TbodyStyle, TdCustom, ThCustom, TheadStyle, TrCustom } from "./TableStyles";
import { useEffect, useState, useContext } from "react";
import { format } from "date-fns";
import { FilterDateContext } from "../../contexts/FilterDateContext";
import { DataColumnsLiraReport, DataColumnsHoversLiraReport } from "../../contents/LiraReport"
import { generateKey } from "../../utilities/KeyGenerator"


export const TablevbLira = () => {

    const [data, setData] = useState([])

    const columns = DataColumnsLiraReport

    const hovers = DataColumnsHoversLiraReport

    const {dates} = useContext(FilterDateContext)

    useEffect(() => {
        
        const params = {'fromDate': dates.fromDate, 'toDate': dates.toDate }

        api.get(`/reportlira`, { params }
        ).then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log("error: " + error.data)
            });

    }, [dates])
    
    let color = true;
    
    const changeColor = (): boolean => {
        
        color = !color
        return color;
    }


    return (
        <>
        <ContentContainer>
            <TableCustomStyle>   
            <TheadStyle>
                <TrCustom backgroundColor={color}>
                    {columns.map((column: any, key:any) => {
                        return (
                            <ThCustom key={generateKey()} title={hovers[key]}>
                                {column}
                            </ThCustom>
                        )
                    })
                    }
                </TrCustom>
                </TheadStyle>
                <TbodyStyle>
                    {data.map((dado: any) => {
                        return (
                           <TrCustom backgroundColor={changeColor()} key={generateKey()}>
                            <TdCustom key={generateKey()}>{dado.id}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.municipio}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.uf}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.bairro}</TdCustom>
                            <TdCustom key={generateKey()}>{format(new Date(dado.campoData), 'dd/MM/yyyy')}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.supervisor}</TdCustom>
                            <TdCustom key={generateKey()}>{format(new Date(dado.labData), 'dd/MM/yyyy')}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.responsavel}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.nome}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.numQuart}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.logradouro}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.complemento}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.tipoImv}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depA1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depA2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depB}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depC}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depD1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depD2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depE}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.amostras}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.tubitos}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.labEx}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.labAeg}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.labAlb}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepA1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepA2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepA2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepC}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepD1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepD2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.aegDepE}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depAlb}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.latitude}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.longitude}</TdCustom>
                         </TrCustom>
                        )
                    })}
            </TbodyStyle>
            </TableCustomStyle>
        </ContentContainer>
        </>
    )

}

