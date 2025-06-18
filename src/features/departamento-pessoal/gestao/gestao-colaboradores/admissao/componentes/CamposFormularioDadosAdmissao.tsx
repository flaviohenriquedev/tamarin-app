import {LineContent} from "@/components/ui/line-content/line-content";
import {InputDataCompleta} from "@/components/ui/input/InputDataCompleta";
import {CargoService} from "@/features/departamento-pessoal/administracao/cargo/ts/cargo-service";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {useCallback, useEffect, useState} from "react";
import {SelectItem} from "@/components/ui/select-item/SelectItem";
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
import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {formatDateBR} from "@/utils/utils";
import {inputStyle} from "@/components/ui/input/style";
import {Label} from "@/components/ui/label/label";
import {addDays} from 'date-fns';
import useSelectItem from "@/components/ui/select-item/hook/useSelectItem";
import {InputMoeda} from "@/components/ui/input/InputMoeda";
import {
    ColaboradorCargo
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/colaborador/entidade/ColaboradorCargo";
import {
    TipoSalarioFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/enums/TipoSalarioENUM";
import {
    FormaPagamentoFactory
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/admissao/enums/FormaPagamentoENUM";
import {TrueFalseFactory} from "@/features/_root/enums/TrueFalseENUM";

type Props = {
    colaboradorCargo: ColaboradorCargo;
}

const cargoService = new CargoService();
const departamentoService = new DepartamentoService();
const tipoContratoService = new TipoContratoService();
const cargaHorariaService = new CargaHorariaService();

export function CamposFormularioDadosAdmissao({colaboradorCargo}: Props) {

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
        const quantidadeDiasExperienciaAdmissao = get(colaboradorCargo, 'quantidadeDiasExperiencia');
        const dataExperienciaAdmissao = get(colaboradorCargo, 'dataExperiencia');
        const quantidadeDiasProrrogacaoAdmissao = get(colaboradorCargo, 'quantidadeDiasProrrogacao');
        const dataProrrogacaoAdmissao = get(colaboradorCargo, 'dataProrrogacao');

        if (quantidadeDiasExperienciaAdmissao) setQuantidadeDiasExperiencia(quantidadeDiasExperienciaAdmissao);
        if (dataExperienciaAdmissao) setDataAdmissaoExperiencia(dataExperienciaAdmissao);
        if (quantidadeDiasProrrogacaoAdmissao) setQuantidadeDiasProrrogacao(quantidadeDiasProrrogacaoAdmissao);
        if (dataProrrogacaoAdmissao) setDataAdmissaoProrrogacao(dataProrrogacaoAdmissao);
    }, [colaboradorCargo]);

    useEffect(() => {
        if (quantidadeDiasExperiencia && quantidadeDiasExperiencia > 0) {
            const novaData = addDays(dataAdmissao, quantidadeDiasExperiencia);
            setDataAdmissaoExperiencia(novaData);

            set(colaboradorCargo, 'quantidadeDiasExperiencia', quantidadeDiasExperiencia);
            set(colaboradorCargo, 'dataExperiencia', novaData);
        } else if (quantidadeDiasExperiencia && quantidadeDiasExperiencia < 0) {
            setQuantidadeDiasExperiencia(0)
        }
    }, [colaboradorCargo, dataAdmissao, quantidadeDiasExperiencia]);

    useEffect(() => {
        if (quantidadeDiasProrrogacao && quantidadeDiasProrrogacao > 0) {
            const novaData = addDays(dataAdmissao, quantidadeDiasProrrogacao);
            setDataAdmissaoProrrogacao(novaData);

            set(colaboradorCargo, 'quantidadeDiasProrrogacao', quantidadeDiasProrrogacao);
            set(colaboradorCargo, 'dataProrrogacao', novaData);
        } else if (quantidadeDiasProrrogacao && quantidadeDiasProrrogacao < 0) {
            setQuantidadeDiasProrrogacao(0)
        }
    }, [colaboradorCargo, dataAdmissao, quantidadeDiasProrrogacao]);

    const onSelectItemCargo = (item: TSelectItem | null) => {
        if (item) {
            const cargoSelecionado = new Cargo();
            cargoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'cargo', cargoSelecionado)
        } else {
            set(colaboradorCargo, 'cargo', null)
        }
    }

    const onSelectItemDepartamento = (item: TSelectItem | null) => {
        if (item) {
            const departamentoSelecionado = new Cargo();
            departamentoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'departamento', departamentoSelecionado)
        } else {
            set(colaboradorCargo, 'departamento', null)
        }
    }

    const onSelectItemTipoContrato = (item: TSelectItem | null) => {
        if (item) {
            const tipoContratoSelecionado = new TipoContrato();
            tipoContratoSelecionado.id = item.value as string;
            set(colaboradorCargo, 'tipoContrato', tipoContratoSelecionado)
        } else {
            set(colaboradorCargo, 'tipoContrato', null)
        }
    }

    const onSelectItemCargaHoraria = (item: TSelectItem | null) => {
        if (item) {
            const cargaHorariaSelecionada = new TipoContrato();
            cargaHorariaSelecionada.id = item.value as string;
            set(colaboradorCargo, 'cargaHoraria', cargaHorariaSelecionada)
        } else {
            set(colaboradorCargo, 'cargaHoraria', null)
        }
    }

    return (
        <div className={`flex flex-col gap-2`}>
            <LineContent>
                <SelectItem
                    entidade={colaboradorCargo}
                    fieldValor={'cargo.id'}
                    label={`Cargo`}
                    values={selectItensCargos}
                    onSelect={onSelectItemCargo}/>

                <SelectItem
                    entidade={colaboradorCargo}
                    fieldValor={'departamento.id'}
                    label={`Departamento`}
                    values={selectItensDepartamentos}
                    onSelect={onSelectItemDepartamento}/>

                <SelectItem
                    entidade={colaboradorCargo}
                    fieldValor={'tipoContrato.id'}
                    label={`Tipo de Admissão`}
                    values={selectItensTiposDeContrato}
                    onSelect={onSelectItemTipoContrato}/>
            </LineContent>
            <LineContent>
                <SelectItem
                    entidade={colaboradorCargo}
                    fieldValor={'cargaHoraria.id'}
                    label={`Carga Horária`}
                    values={selectItensCargaHoraria}
                    onSelect={onSelectItemCargaHoraria}/>

                <InputMoeda
                    label={`Salário`}
                    entidade={colaboradorCargo}
                    atributo={'salario'}/>

                <SelectItem
                    label={`Tipo de Salário`}
                    entidade={colaboradorCargo}
                    fieldValor={'tipoSalario'}
                    values={TipoSalarioFactory.getSelectItens()}/>

                <SelectItem
                    label={`Forma de Pagamento`}
                    entidade={colaboradorCargo}
                    fieldValor={'formaPagamento'}
                    values={FormaPagamentoFactory.getSelectItens()}/>

                <SelectItem
                    label={`Sindicato`}
                    entidade={colaboradorCargo}
                    fieldValor={'possuiSindicato'}
                    values={TrueFalseFactory.getSelectItens()}/>

                <InputDataCompleta
                    label={`Data de Admissão`}
                    atributo={`dataAdmissao`}
                    dataPadrao={dataAdmissao}
                    onChangeDate={onChangeDataAdmissao}
                    entidade={colaboradorCargo}
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
        </div>
    )
}