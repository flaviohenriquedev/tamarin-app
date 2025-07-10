'use client'

import {MultiSelectItem, MultiSelectItemConfig} from "@/components/ui/multi-select-item/MultiSelectItem";
import {
    ColaboradorService
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/service/ColaboradorService";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

const service = new ColaboradorService();
export default function PaginaTeste() {

    const configMultiSelectColaborador: MultiSelectItemConfig<Colaborador, ColaboradorService> = {
        service: service,
        funcaoListagem: 'listar',
        fieldLabel: 'nomeCompleto',
        fieldValue: 'id'
    }
    
    return (
        <div className={`flex bg-base-100 items-center justity-center w-screen h-screen`}>
            <MultiSelectItem config={configMultiSelectColaborador}/>
        </div>
    )
}
