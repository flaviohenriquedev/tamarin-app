import {Dot} from "lucide-react";
import {TRoute} from "@/types/_root/TRoute";
import {ReactNode, useState} from "react";
import {funcionalidades} from "@/enums/FuncionalidadeEnum";

type Props = {
    children?: ReactNode;
    rota: TRoute
}

export function PermissoesSubrotas({rota, children}: Props) {
    const [mostrarListaPermissoes, setMostrarListaPermissoes] = useState<boolean>(false)

    function renderizarPermissoes() {

        const funcionalidadesArray = Object.entries(funcionalidades).map(
            ([key, value]) => ({
                chave: key,
                label: value.label
            })
        );

        return funcionalidadesArray.map(funcionalidade => {
            return (
                <div key={funcionalidade.label} className={`font-light`}>
                    <div className={`cursor-default flex items-center gap-2 hover:bg-base-100 rounded-md`}>
                        <input type="checkbox" className="checkbox checkbox-xs" />
                        {funcionalidade.label}
                    </div>
                </div>
            )
        })
    }

    return (
        <li key={rota.title} className={`font-light border-l ${mostrarListaPermissoes ? 'border-primary' : 'border-transparent'}`}>
            <div className={`cursor-default flex items-center gap-3 hover:bg-base-100 rounded-md`}
                 onClick={() => setMostrarListaPermissoes(!mostrarListaPermissoes)}>
                <Dot size={16}/>
                {rota.title}
            </div>

            {mostrarListaPermissoes && (
                <div className={`flex flex-col gap-1 ml-6 p-1 bg-base-100 rounded-md`}>
                    {renderizarPermissoes()}
                </div>
            )}
            {children && children}
        </li>
    )
}