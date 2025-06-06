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
import {
    CargaHorariaService
} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/carga-horaria-service";
import {DepartamentoService} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-service";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";

type Props = {
    admissao: Admissao;
}

const cargoService = new CargoService();
const departamentoService = new DepartamentoService();
const tipoContratoService = new TipoContratoService();
const cargaHorariaService = new CargaHorariaService();

export function CamposFormularioDadosAdmissao({admissao}: Props) {

    const [selectItensCargos, setSelectItensCargos] = useState<TSelectItem[]>([]);
    const [selectItensDepartamentos, setSelectItensDepartamentos] = useState<TSelectItem[]>([]);
    const [selectItensTiposDeContrato, setSelectItensTiposDeContrato] = useState<TSelectItem[]>([]);
    const [selectItensCargaHoraria, setSelectItensCargaHoraria] = useState<TSelectItem[]>([]);

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
        departamentoService.listar().then(result => {
            result.map(departamento => {
                const item: TSelectItem = {
                    label: departamento.descricao,
                    value: departamento.id as string
                }
                selectItens.push(item)
            })
            setSelectItensDepartamentos(selectItens)
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

    useEffect(() => {
        const selectItens: TSelectItem[] = [];
        cargaHorariaService.listar().then(result => {
            result.map(cargaHoraria => {
                const item: TSelectItem = {
                    label: cargaHoraria.descricao,
                    value: cargaHoraria.id as string
                }
                selectItens.push(item)
            })
            setSelectItensCargaHoraria(selectItens)
        })
    }, [])

    const onSelectItemCargo = (item: TSelectItem) => {
        const cargoSelecionado = new Cargo();
        cargoSelecionado.id = item.value as string;
        set(admissao, 'cargo', cargoSelecionado)
    }

    const onSelectItemDepartamento = (item: TSelectItem) => {
        const departamentoSelecionado = new Cargo();
        departamentoSelecionado.id = item.value as string;
        set(admissao, 'departamento', departamentoSelecionado)
    }

    const onSelectItemTipoContrato = (item: TSelectItem) => {
        const tipoContratoSelecionado = new TipoContrato();
        tipoContratoSelecionado.id = item.value as string;
        set(admissao, 'tipoContrato', tipoContratoSelecionado)
    }

    const onSelectItemCargaHoraria = (item: TSelectItem) => {
        const cargaHorariaSelecionada = new TipoContrato();
        cargaHorariaSelecionada.id = item.value as string;
        set(admissao, 'cargaHoraria', cargaHorariaSelecionada)
    }

    return (
        <>
            <LineContent>
                <SelectItem
                    label={`Cargo`}
                    values={selectItensCargos}
                    onSelect={onSelectItemCargo}/>

                <SelectItem
                    label={`Departamento`}
                    values={selectItensDepartamentos}
                    onSelect={onSelectItemDepartamento}/>

                <SelectItem
                    label={`Tipo Contrato`}
                    values={selectItensTiposDeContrato}
                    onSelect={onSelectItemTipoContrato}/>

            </LineContent>

            <LineContent>
                <SelectItem
                    label={`Carga Horária`}
                    values={selectItensCargaHoraria}
                    onSelect={onSelectItemCargaHoraria}/>

                <InputString
                    label={`Salário`}
                    atributo={`salario`}
                    entidade={admissao}
                    />

                <InputDataCompleta
                    label={`Data de Admissão`}
                    atributo={`dataAdmissao`}
                    entidade={admissao}
                    />
            </LineContent>
        </>
    )
}