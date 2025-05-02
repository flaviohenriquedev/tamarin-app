import {LocalidadePais} from "@/features/gerenciamento-sistema/gestao-localidade/pais/localidade-pais";
import {LocalidadeEstado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/localidade-estado";
import {LocalidadeCidade} from "@/features/gerenciamento-sistema/gestao-localidade/cidade/localidade-cidade";

export function LocalidadePaginaInicial() {
    return (
        <div className="flex gap-2 tabs tabs-xs tabs-box h-full">
            <input type="radio" name="my_tabs_1" className="tab cursor-default px-3" aria-label="Pais" defaultChecked/>
            <div className="tab-content border-base-300 bg-base-100 p-2">
                <LocalidadePais />
            </div>

            <input type="radio" name="my_tabs_1" className="tab cursor-default px-3" aria-label="Estado"/>
            <div className="tab-content border-base-300 bg-base-100 p-2">
                <LocalidadeEstado />
            </div>

            <input type="radio" name="my_tabs_1" className="tab cursor-default px-3" aria-label="Cidade"/>
            <div className="tab-content border-base-300 bg-base-100 p-2">
                <LocalidadeCidade />
            </div>
        </div>
    )
}