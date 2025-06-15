import {LineContent} from "@/components/ui/line-content/line-content";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {CargoService} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-service";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {useCallback, useEffect, useState} from "react";
import {SelectItem} from "@/components/ui/select-item/select-item";
import {get, set} from "lodash";
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
import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {formatDateBR} from "@/utils/utils";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/label";
import {addDays} from 'date-fns';
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {InputMoeda} from "@/components/ui/input/InputMoeda";

type Props = {
    admissao: Admissao;
}

const cargoService = new CargoService();
const departamentoService = new DepartamentoService();
const tipoContratoService = new TipoContratoService();
const cargaHorariaService = new CargaHorariaService();

export function CamposFormularioDadosAdmissao({admissao}: Props) {

    const {selectItens: selectItensCargos} = useSelectItem({
        service: cargoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensDepartamentos} = useSelectItem({
        service: departamentoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensTiposDeContrato} = useSelectItem({
        service: tipoContratoService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const {selectItens: selectItensCargaHoraria} = useSelectItem({
        service: cargaHorariaService,
        fieldDescricao: 'descricao',
        fieldValor: 'id'
    })

    const [dataAdmissao, setDataAdmissao] = useState<Date>(new Date());
    const [quantidadeDiasExperiencia, setQuantidadeDiasExperiencia] = useState<number>();
    const [dataAdmissaoExperiencia, setDataAdmissaoExperiencia] = useState<Date>();

    const [quantidadeDiasProrrogacao, setQuantidadeDiasProrrogacao] = useState<number>();
    const [dataAdmissaoProrrogacao, setDataAdmissaoProrrogacao] = useState<Date>();

    const onChangeDataAdmissao = useCallback((data: Date) => {
        setDataAdmissao(data);
    }, [])

    useEffect(() => {
        const quantidadeDiasExperienciaAdmissao = get(admissao, 'quantidadeDiasExperiencia');
        const dataExperienciaAdmissao = get(admissao, 'dataExperiencia');
        const quantidadeDiasProrrogacaoAdmissao = get(admissao, 'quantidadeDiasProrrogacao');
        const dataProrrogacaoAdmissao = get(admissao, 'dataProrrogacao');

        if (quantidadeDiasExperienciaAdmissao) setQuantidadeDiasExperiencia(quantidadeDiasExperienciaAdmissao);
        if (dataExperienciaAdmissao) setDataAdmissaoExperiencia(dataExperienciaAdmissao);
        if (quantidadeDiasProrrogacaoAdmissao) setQuantidadeDiasProrrogacao(quantidadeDiasProrrogacaoAdmissao);
        if (dataProrrogacaoAdmissao) setDataAdmissaoProrrogacao(dataProrrogacaoAdmissao);
    }, [admissao]);

    useEffect(() => {
        if (quantidadeDiasExperiencia && quantidadeDiasExperiencia > 0) {
            const novaData = addDays(dataAdmissao, quantidadeDiasExperiencia);
            setDataAdmissaoExperiencia(novaData);

            set(admissao, 'quantidadeDiasExperiencia', quantidadeDiasExperiencia);
            set(admissao, 'dataExperiencia', novaData);
        } else if (quantidadeDiasExperiencia && quantidadeDiasExperiencia < 0) {
            setQuantidadeDiasExperiencia(0)
        }
    }, [admissao, dataAdmissao, quantidadeDiasExperiencia]);

    useEffect(() => {
        if (quantidadeDiasProrrogacao && quantidadeDiasProrrogacao > 0) {
            const novaData = addDays(dataAdmissao, quantidadeDiasProrrogacao);
            setDataAdmissaoProrrogacao(novaData);

            set(admissao, 'quantidadeDiasProrrogacao', quantidadeDiasProrrogacao);
            set(admissao, 'dataProrrogacao', novaData);
        } else if (quantidadeDiasProrrogacao && quantidadeDiasProrrogacao < 0) {
            setQuantidadeDiasProrrogacao(0)
        }
    }, [admissao, dataAdmissao, quantidadeDiasProrrogacao]);

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
                    entidade={admissao}
                    field={'cargo.id'}
                    label={`Cargo`}
                    values={selectItensCargos}
                    onSelect={onSelectItemCargo}/>

                <SelectItem
                    entidade={admissao}
                    field={'departamento.id'}
                    label={`Departamento`}
                    values={selectItensDepartamentos}
                    onSelect={onSelectItemDepartamento}/>

                <SelectItem
                    entidade={admissao}
                    field={'tipoContrato.id'}
                    label={`Tipo Contrato`}
                    values={selectItensTiposDeContrato}
                    onSelect={onSelectItemTipoContrato}/>

            </LineContent>
            <LineContent>
                <SelectItem
                    entidade={admissao}
                    field={'cargaHoraria.id'}
                    label={`Carga Horária`}
                    values={selectItensCargaHoraria}
                    onSelect={onSelectItemCargaHoraria}/>

                <InputMoeda
                    label={`Salário`}
                    entidade={admissao}
                    atributo={'salario'}/>

                <InputDataCompleta
                    label={`Data de Admissão`}
                    atributo={`dataAdmissao`}
                    dataPadrao={dataAdmissao}
                    onChangeDate={onChangeDataAdmissao}
                    entidade={admissao}
                />
            </LineContent>

            <LineContent>
                <Fieldset label={`Experiência`} largura={`w-full`}>
                    <LineContent>
                        <Label title={`Prazo Experiência (dias)`}>
                            <input
                                className={inputStyle}
                                type={`number`}
                                value={quantidadeDiasExperiencia}
                                onChange={(e) => setQuantidadeDiasExperiencia(parseInt(e.target.value))}/>
                        </Label>
                        <div
                            className={`flex rounded-lg p-3 items-center w-full justify-between text-sm bg-base-300 text-base-content`}>
                            <div className={`flex gap-3`}>
                                <label><strong>Experiência até:</strong></label>
                                <label>{`${quantidadeDiasExperiencia && dataAdmissaoExperiencia ? formatDateBR(dataAdmissaoExperiencia) : '---/---/---'}`}</label>
                            </div>
                        </div>
                    </LineContent>
                </Fieldset>

                <Fieldset label={`Prorrogação`} largura={`w-full`}>
                    <LineContent>
                        <Label title={`Prazo Prorrogação (dias)`}>
                            <input
                                className={inputStyle}
                                type={`number`}
                                value={quantidadeDiasProrrogacao}
                                onChange={(e) => setQuantidadeDiasProrrogacao(parseInt(e.target.value))}/>
                        </Label>
                        <div
                            className={`flex rounded-lg p-3 items-center w-full justify-between text-sm bg-base-300 text-base-content`}>
                            <div className={`flex gap-3`}>
                                <label><strong>Prorrogado até:</strong></label>
                                <label>{`${quantidadeDiasProrrogacao && dataAdmissaoProrrogacao ? formatDateBR(dataAdmissaoProrrogacao) : '---/---/---'}`}</label>
                            </div>
                        </div>
                    </LineContent>
                </Fieldset>
            </LineContent>
        </>
    )
}