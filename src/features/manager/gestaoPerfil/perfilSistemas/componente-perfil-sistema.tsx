import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {useCallback, useState} from "react";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {
    ComponentePerfilSistemaItens
} from "@/features/manager/gestaoPerfil/perfilSistemas/componente-perfil-sistema-itens";

type Props = {
    className: string;
    listaPerfilSistema: PerfilSistema[];
    selecionarPerfilSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePerfilSistema({
                                           className,
                                           listaPerfilSistema,
                                           selecionarPerfilSistema}: Props) {

    const [idPerfilSistemaSelecionado, setIdPerfilSistemaSelecionado] = useState<string>('')

    const selectPerfilSistema = useCallback((
        (perfilSistema: PerfilSistema) => {
            setIdPerfilSistemaSelecionado(perfilSistema.clienteSistema.id)
            selecionarPerfilSistema(perfilSistema)
        }
    ), [selecionarPerfilSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaPerfilSistema && listaPerfilSistema.length > 0 && listaPerfilSistema.map(perfilSistema => {
                    return (
                        <ComponentePerfilSistemaItens
                            key={perfilSistema.clienteSistema.keySistema}
                            clienteSistema={perfilSistema.clienteSistema}
                            perfilSistema={perfilSistema}
                            onClick={selectPerfilSistema}
                            destacar={idPerfilSistemaSelecionado === perfilSistema.clienteSistema.id}/>
                    )
                })}
            </ul>
        </Fieldset>
    )
}