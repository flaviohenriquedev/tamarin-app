'use client'

import {CardModulo} from "@/components/layouts/card-modulo/card-modulo";
import {rotasSistema} from "@/features/sistema/rotas";

export default function PaginaInicial() {

    function renderModulos() {
        return rotasSistema.map(modulo => {
            return (
                <CardModulo key={modulo.titulo}
                            modulo={modulo}/>
            )
        })
    }

    return (
        <div className={`flex items-center justify-center w-full h-full gap-4`}>
            {renderModulos()}
        </div>
    )
}