import {RouteType} from "@/types/_root/RouteType";
import {useState} from "react";
import {PermissoesSubrotas} from "@/features/manager/usuario/permissoes-subrotas";

type Props = {
    modulo: RouteType
}

export function PermissoesModulos({modulo}: Props) {
    const [moduloSelecionado, setModuloSelecionado] = useState<boolean>(false);

    function renderizarSubrotas(subrotas: RouteType[]) {
        return subrotas.map(rota => {
            return (
                <PermissoesSubrotas key={rota.title} rota={rota}>
                    {rota.subRoute && (
                        <ul className={`pl-6`}>
                            {renderizarSubrotas(rota.subRoute)}
                        </ul>
                    )}
                </PermissoesSubrotas>
            )
        })
    }

    return (
        <li key={modulo.title} className={`flex flex-col gap-1 px-2 py-1`}>
            <div className={`flex items-center gap-3`}>
                <input type="checkbox"
                       checked={moduloSelecionado}
                       className="cursor-default checkbox checkbox-xs"
                       onChange={() => setModuloSelecionado(!moduloSelecionado)}

                />
                <label className={`text-sm`}>{modulo.title}</label>
            </div>
            {moduloSelecionado && modulo.subRoute && (
                <ul>
                    {renderizarSubrotas(modulo.subRoute)}
                </ul>
            )}
        </li>
    )
}