import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {
    ComponentePerfilSistemaModulosItens
} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/componente-perfil-sistema-modulos-itens";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import {RouteTypeToSelect} from "@/features/manager/gestaoPerfil/perfil/perfil-componente-cadastro";
import {ListaModulos} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/layout/lista-modulos";

type Props = {
    className: string
    clienteSistemaSelecionado?: ClienteSistema
    listaPerfilSistemaModulo: PerfilSistemaModulo[]
    listaModulos: RouteTypeToSelect[]
}

export function ComponentePerfilSistemaModulos({
                                                   className,
                                                   clienteSistemaSelecionado,
                                                   listaPerfilSistemaModulo,
                                                   listaModulos
                                               }: Props) {
    // function renderizarRotas() {
    //     if (clienteSistemaSelecionado) {
    //         const sistemaSelecionado = rotasSistema.find(
    //             rs => rs.sistema === clienteSistemaSelecionado.keySistema
    //         )
    //         if (sistemaSelecionado) {
    //             return sistemaSelecionado.rotas.map(modulo => {
    //                 return <ComponentePerfilSistemaModulosItens
    //                     key={modulo.title}
    //                     modulo={modulo}
    //                     statePerfilRotas={{
    //                         val: [],
    //                         func: () => []
    //                     }}/>
    //             })
    //         }
    //     }
    // }

    function renderizarRotas() {
        return listaModulos.map(modulo => {
            return <ComponentePerfilSistemaModulosItens
                key={modulo.title}
                modulo={modulo}
                statePerfilRotas={{
                    val: [],
                    func: () => []
                }}/>
        })
    }

    return (
        <Fieldset label={`Módulos`}
                  className={`
                  ${className}
                    absolute
                    h-full
                    overflow-y-auto
                    scrollbar-thumb-base-300
                    scrollbar-track-transparent
                    scrollbar-thin`
                  }>
            <div className={`flex flex-col gap-4`}>
                <ListaModulos listaPerfilSistemaModulo={listaPerfilSistemaModulo}/>
            </div>
        </Fieldset>
    )
}