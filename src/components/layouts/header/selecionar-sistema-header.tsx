import {Grip} from "lucide-react";
import {useState} from "react";
import {CardSistemaHeader} from "@/components/layouts/header/card-sistema-header";
import {SistemaType} from "@/features/sistema/types";
import {useSistemaContext} from "@/features/sistema/sistema-context";

export function SelecionarSistemaHeader() {
    const { selecionarSistema, listaSistemasUsuarioLogado } = useSistemaContext();
    const [abrirListaDeSistemas, setAbrirListaDeSistemas] = useState<boolean>(false);

    function onClick() {
        setAbrirListaDeSistemas(!abrirListaDeSistemas);
    }

    function selectSistema(sistema: SistemaType) {
        console.log('Função chamada', sistema)
        selecionarSistema(sistema, true);
        setAbrirListaDeSistemas(false);
    }

    function renderListaDeSistemas() {
        if (listaSistemasUsuarioLogado.length > 0) {
            return (
                <ul>
                    {listaSistemasUsuarioLogado.map(sistema => {
                        return <CardSistemaHeader key={sistema.sistema}
                                                  sistema={sistema}
                                                  onSelectSistema={selectSistema}/>
                    })}
                </ul>
            )
        }
        return <li>Nenhum sistema encontrado.</li>
    }

    return (
        <div className={`relative`}>
            <button
                className={`p-2 cursor-pointer transition-transform duration-200 active:scale-90 border border-neutral-200 shadow-md rounded-lg`}
                onClick={onClick}>
                <Grip/>
            </button>
            {abrirListaDeSistemas && (
                <div className={`absolute z-50 bg-white shadow-lg rounded-lg border border-neutral-200 p-4 mt-2`}>
                    {renderListaDeSistemas()}
                </div>
            )}
        </div>
    )
}