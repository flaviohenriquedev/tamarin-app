import {AdmissaoCargo} from "@/features/departamento-pessoal/gestao/admissao/admissao-cargo/ts/admissao-cargo";
import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {InputDataCompleta} from "@/components/ui/input/input-data-completa";
import {CargoService} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-service";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {useEffect, useState} from "react";
import {SelectItem} from "@/components/ui/select-item/select-item";
import {set} from "lodash";
import {Cargo} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo";
import {
    TipoContratoService
} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato-service";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";

type Props = {
    admissaoCargo: AdmissaoCargo;
}

const cargoService = new CargoService();
const tipoContratoService = new TipoContratoService();

export function CamposFormularioDadosAdmissao({admissaoCargo}: Props) {

    const [selectItensCargos, setSelectItensCargos] = useState<TSelectItem[]>([]);
    const [selectItensTiposDeContrato, setSelectItensTiposDeContrato] = useState<TSelectItem[]>([]);

    useEffect(() => {
        const selectItens: TSelectItem[] = [];
        cargoService.listar().then(result => {
            result.map(cargo => {
                const item: TSelectItem = {
                    label: cargo.descricao,
                    value: cargo.id as string
                }
                selectItens.push(item)
            })
            setSelectItensCargos(selectItens)
        })
    }, [])

    useEffect(() => {
        const selectItens: TSelectItem[] = [];
        tipoContratoService.listar().then(result => {
            result.map(tipoContrato => {
                const item: TSelectItem = {
                    label: tipoContrato.descricao,
                    value: tipoContrato.id as string
                }
                selectItens.push(item)
            })
            setSelectItensTiposDeContrato(selectItens)
        })
    }, [])

    const onSelectItemCargo = (item: TSelectItem) => {
        const cargoSelecionado = new Cargo();
        cargoSelecionado.id = item.value as string;
        set(admissaoCargo, 'cargo', cargoSelecionado)
    }

    const onSelectItemTipoContrato = (item: TSelectItem) => {
        const tipoContratoSelecionado = new TipoContrato();
        tipoContratoSelecionado.id = item.value as string;
        set(admissaoCargo, 'tipoContrato', tipoContratoSelecionado)
    }

    return (
        <>
            <LineContent>
                <SelectItem
                    label={`Cargo`}
                    required
                    values={selectItensCargos}
                    onSelect={onSelectItemCargo}/>

                <SelectItem
                    label={`Tipo Contrato`}
                    required
                    values={selectItensTiposDeContrato}
                    onSelect={onSelectItemTipoContrato}/>
                <InputString
                    label={`Salário`}
                    atributo={`salario`}
                    entidade={admissaoCargo}
                    required/>
                <InputDataCompleta
                    label={`Data de Admissão`}
                    atributo={`dataAdmissao`}
                    entidade={admissaoCargo}
                    required/>
            </LineContent>
        </>
    )
}