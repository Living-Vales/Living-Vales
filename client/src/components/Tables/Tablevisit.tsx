import api from "../../services/api";
import { ContentContainer, TableCustomStyle, TbodyStyle, TdCustom, ThCustom, TheadStyle, TrCustom } from "./TableStyles";
import { useEffect, useState, useContext } from "react";
import { format } from "date-fns";
import { FilterDateContext } from "../../contexts/FilterDateContext";
import { DataColumnsVisit, DataColumnsHoverVisit } from "../../contents/Visit";
import { generateKey } from "../../utilities/KeyGenerator"

export const TableCustomVisit = () => {

    const [dado, setDado] = useState([])

    const columns = DataColumnsVisit

    const hovers = DataColumnsHoverVisit

    const {dates} = useContext(FilterDateContext)

    useEffect(() => {

        const params = {'fromDate': dates.fromDate, 'toDate': dates.toDate }

        api.get(`/visit`, { params } 
        ).then((response) => {
                setDado(response.data)
            })
            .catch((error) => {
                console.log("error: " + error.data)
            });

    }, [dates])

    let color = true;

    const changeColor = (): boolean => {
        color = !color
        return color
    }


    return (
        <>
        <ContentContainer>
            <TableCustomStyle>
            <TheadStyle>
                <TrCustom backgroundColor={color} key={generateKey()}>
                    {columns.map((column:any, key: any) => {
                        return (
                            <ThCustom key={generateKey()} title={hovers[key]}>
                                {column}
                            </ThCustom>
                        )
                    })
                    }
                </TrCustom>
                </TheadStyle>
                <TbodyStyle key={generateKey()}>
                    {dado.map((dado: any) => {
                        return (
                           <TrCustom backgroundColor={changeColor()} key={generateKey()} >
                            <TdCustom key={generateKey()}>{dado.id}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.codMunicipio}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.nomeBairro}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.zona}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.tipo}</TdCustom>
                            <TdCustom key={generateKey()}>{format(new Date(dado.data), 'dd/MM/yyyy')}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.ciclo}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.agente}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.atividade}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.numQuart}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.ladoQuart}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.nomeLogr}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.numImv}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.seqImv}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.tipoImv}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.tipoVisita}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.pendencia}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depA1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depA2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depB}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depC}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depD1}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depD2}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depE}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.imvInsp}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.numAmInic}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.numAmFim}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.qtdTubitos}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.depElim}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.imvTrat}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv1Tipo}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv1G}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv1Qtd}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv2Tipo}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv2G}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.focLarv2Qtd}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.perifocTipo}</TdCustom>
                            <TdCustom key={generateKey()}>{dado.perifocQtd}</TdCustom>
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


