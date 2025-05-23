import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {ChevronRight} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox/checkbox";


type Props = {
    clienteSistema: ClienteSistema
    onClick: (clienteSistema: ClienteSistema) => void
    destacar?: boolean
}

const perfilService = new PerfilService();

export function ComponenteUsuarioSistemaItens({
                                                  clienteSistema,
                                                  onClick,
                                              }: Props) {
    const [requisicaoFeita, setRequisicaoFeita] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [abrirListaPerfil, setAbrirListaPerfil] = useState<boolean>(false);
    const [listaPerfil, setListaPerfil] = useState<Perfil[]>([])

    useEffect(() => {
        setRequisicaoFeita(false)
    }, []);

    function renderListaPerfil() {
        if (listaPerfil && listaPerfil.length > 0) {
            return listaPerfil.map(perfil => {
                return (
                    <ItemLista key={perfil.id}>
                        <Checkbox
                            entidade={perfil}
                            atributo={'checked'}/>
                        {perfil.descricao}
                    </ItemLista>
                )
            })
        }
        return (
            <>
                <ItemLista>Nenhum perfil cadastrado.</ItemLista>
            </>
        )
    }

    const handleClick = useCallback((clienteSistema: ClienteSistema) => {
        if (!requisicaoFeita) {
            setLoading(true)
            perfilService.buscarPerfisPorIdClienteSistema(clienteSistema.id)
                .then(result => {
                    setListaPerfil(result);
                    setLoading(false);
                    setRequisicaoFeita(true)
                    setAbrirListaPerfil(!abrirListaPerfil);
                })
        } else {
            setAbrirListaPerfil(!abrirListaPerfil);
        }
    }, [abrirListaPerfil, requisicaoFeita])

    return (
        <li key={clienteSistema.id}>
            <div className={`
                    flex
                    items-center
                    gap-1
                    cursor-default
                    border-2
                    rounded-md
                    px-2
                    hover:bg-base-200 border-transparent text-gray-400
                    `}
                 onClick={() => handleClick(clienteSistema)}>
                <label className={`w-full h-full p-2 `} onClick={() => {
                    onClick(clienteSistema)
                }}>
                    {SistemaENUMFactory.getDescricao(clienteSistema.keySistema)}
                </label>
                {loading ? <span className="loading loading-spinner loading-sm"></span> : <ChevronRight size={20}/>}
            </div>
            {abrirListaPerfil && (
                <ul className={`px-3 py-1`}>{renderListaPerfil()}</ul>
            )}
        </li>
    )
}

function ItemLista({children}: { children: ReactNode }) {
    return (
        <li className={`flex items-center gap-2 py-1 px-3 bg-base-200`}>{children}</li>
    )
}