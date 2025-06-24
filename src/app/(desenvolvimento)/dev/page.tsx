'use client'

import {InputSearchConfig} from "@/components/ui/input/inpustSearch/useInputSearch";
import {CidadeService} from "@/features/manager/gestaoLocalidade/cidade/ts/CidadeService";
import {InputSearch} from "@/components/ui/input/inpustSearch/InputSearch";
import {useState} from "react";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {
    ColaboradorEndereco
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/ColaboradorEndereco";
import {Button} from "@/components/ui/button/button";

const cidadeService = new CidadeService();
export default function PaginaTeste() {

    const config: InputSearchConfig<Cidade, CidadeService> = {
        service: cidadeService,
        funcaoListagem: 'buscarPorNomeParecido',
        fieldLabel: 'nome',
        fieldValue: 'id'
    }

    const [colaboradorEndereco, setColaboradorEndereco] = useState<ColaboradorEndereco>(new ColaboradorEndereco())

    function click() {
        console.log(`endereco -> `, colaboradorEndereco)
    }

    return (
        <>
        <InputSearch
            entidade={colaboradorEndereco}
            atributo={'cidade'}
            config={config}/>

            <Button onClick={click}>Enviar</Button>
        </>
    )
}
