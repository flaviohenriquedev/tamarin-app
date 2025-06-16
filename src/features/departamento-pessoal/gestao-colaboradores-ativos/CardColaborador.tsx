import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {formatarCPF, getIniciaisNome} from "@/utils/utils";
import {
    StatusColaboradorENUM,
    StatusColaboradorFactory
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/StatusColaboradorENUM";

type Props = {
    colaborador: Colaborador;
}

export function CardColaborador({colaborador}: Props) {
    return (
        <div className={`
            flex
            items-center
            gap-4
            bg-base-100
            rounded-lg
            shadow-md
            p-3
        `}>
            {/*foto*/}
            <div
                className={`border-2 border-primary flex items-center justify-center w-20 h-20 shadow-md rounded-lg text-[35pt] font-bold text-neutral-400`}>
                {getIniciaisNome(colaborador.nomeCompleto)}
            </div>

            {/*dados*/}
            <div className={`flex gap-2`}>
                <div className={`flex flex-col`}>
                    <label className={`font-semibold text-lg text-neutral-600`}>{colaborador.nomeCompleto}</label>
                    <label className={`text-sm`}>{formatarCPF(colaborador.cpf)}</label>
                    <CardStatus statusColaborador={colaborador.statusColaborador} />
                </div>
                <div className={`divider divider-horizontal`}/>
                <div className={`flex flex-col`}>
                    <label>{colaborador.cargoAtivo.cargo.descricao}</label>
                    <label>Admitido em: {colaborador.cargoAtivo.dataAdmissao.toString()}</label>
                </div>
            </div>
        </div>
    )
}

type CardStatusProps = {
    statusColaborador: StatusColaboradorENUM;
}

function CardStatus({statusColaborador}: CardStatusProps) {
    const backgroundColor: string = StatusColaboradorFactory.getInfo(statusColaborador).bg;

    return (
        <div className={`
                mt-2
                flex
                w-fit
                text-sm
                py-1
                px-2
                rounded-md
                text-base-100
                ${backgroundColor ? backgroundColor : 'bg-base-100'}
                `}>
            {StatusColaboradorFactory.getLabel(statusColaborador)}
        </div>
    )
}