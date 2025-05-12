import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {PermissoesItemSistema} from "@/features/manager/usuario/permissoes-item-sistema";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {useCallback, useEffect, useState} from "react";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    className: string;
    listaClienteSistema: ClienteSistema[];
    listaPerfilSistema: PerfilSistema[];
    selecionarClienteSistema: (clienteSistema: ClienteSistema) => void;
    selecionarPerfilSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePefilSistema({
                                           className,
                                           listaClienteSistema,
                                           listaPerfilSistema,
                                           selecionarClienteSistema,
                                           selecionarPerfilSistema}: Props) {

    const [idClienteSistemaSelecionado, setIdClienteSistemaSelecionado] = useState<string>('')
    const [idPerfilSistemaSelecionado, setIdPerfilSistemaSelecionado] = useState<string>('')

    const selecionarSistema = useCallback((
        (clienteSistema: ClienteSistema) => {
            setIdClienteSistemaSelecionado(clienteSistema.id)
            selecionarClienteSistema(clienteSistema)
        }
    ), [selecionarClienteSistema])

    const selectPerfilSistema = useCallback((
        (perfilSistema: PerfilSistema) => {
            setIdPerfilSistemaSelecionado(perfilSistema.clienteSistema.id)
            selecionarPerfilSistema(perfilSistema)
        }
    ), [selecionarClienteSistema])

    function logar(perfilSistema: PerfilSistema) {
        console.log(perfilSistema)
    }

    useEffect(() => {
        console.log('MUDOU',  listaPerfilSistema)
    }, [listaPerfilSistema]);

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <div>
                <ul className={`flex flex-col gap-1`}>
                    {listaPerfilSistema && listaPerfilSistema.length > 0 && listaPerfilSistema.map(perfilSistema => {
                        return (
                            <PermissoesItemSistema
                                key={perfilSistema.clienteSistema.keySistema}
                                clienteSistema={perfilSistema.clienteSistema}
                                perfilSistema={perfilSistema}
                                onClick={selectPerfilSistema}
                                onCheck={() => {}}
                                destacar={idPerfilSistemaSelecionado === perfilSistema.clienteSistema.id}/>
                        )
                    })}
                </ul>
            </div>
        </Fieldset>
    )
}