import {SistemaType} from "@/features/sistema/types";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";

type Props = {
    sistema: SistemaType
    onSelectSistema: (sistema: SistemaType) => void
}

export function CardSistemaHeader({sistema, onSelectSistema}: Props) {
    return (
        <li className={`p-2`}>
            <div className={`cursor-pointer flex gap-2 p-2 bg-white border border-neutral-200 rounded-lg shadow-md`}
                 onClick={() => onSelectSistema(sistema)}>
                {SistemaENUMFactory.getDescricao(sistema.sistema)}
            </div>
        </li>
    )
}