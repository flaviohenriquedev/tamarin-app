import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {useCallback, useState} from "react";
import {
    ComponenteUsuarioSistemaItens
} from "@/features/manager/gestaoUsuario/usuarioSistemas/componente-usuario-sistema-itens";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";

type Props = {
    className: string;
    listaClienteSistema: ClienteSistema[];
    selecionarClienteSistema: (clienteSistema: ClienteSistema) => void;
}

export function ComponenteUsuarioSistema({
                                             className,
                                             listaClienteSistema,
                                             selecionarClienteSistema
                                         }: Props) {

    const [idClienteSistema, setIdClienteSistema] = useState<string>('')

    const selectClienteSistema = useCallback((
        (clienteSistema: ClienteSistema) => {
            setIdClienteSistema(clienteSistema.id)
            selecionarClienteSistema(clienteSistema)
        }
    ), [selecionarClienteSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaClienteSistema && listaClienteSistema.length > 0 && listaClienteSistema.map(clienteSistema => {
                    return (
                        <ComponenteUsuarioSistemaItens
                            key={clienteSistema.keySistema}
                            clienteSistema={clienteSistema}
                            onClick={selectClienteSistema}
                            destacar={idClienteSistema === clienteSistema.id}/>
                    )
                })}
            </ul>
        </Fieldset>
    )
}