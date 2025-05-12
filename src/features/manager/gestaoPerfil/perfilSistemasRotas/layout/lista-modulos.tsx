import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import {ModuloFactory} from "@/enums/ModuloEnum";
import {ListaModulosItems} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/layout/lista-modulos-item";

type Props = {
    listaPerfilSistemaModulo: PerfilSistemaModulo[]
}

export function ListaModulos({listaPerfilSistemaModulo}: Props) {

    function renderItems() {
        return listaPerfilSistemaModulo.map(perfilSistemaModulo => {
            return (
                <ListaModulosItems
                    key={perfilSistemaModulo.modulo}>
                    {ModuloFactory.getLabel(perfilSistemaModulo.modulo)}
                    {perfilSistemaModulo.isLista}
                </ListaModulosItems>
            )
        })
    }

    return (
        <ul>
            {renderItems()}
        </ul>
    )
}