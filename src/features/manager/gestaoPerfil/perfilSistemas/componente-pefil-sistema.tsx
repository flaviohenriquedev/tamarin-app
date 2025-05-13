import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {PermissoesItemSistema} from "@/features/manager/usuario/permissoes-item-sistema";
import {useCallback, useState} from "react";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    className: string;
    listaPerfilSistema: PerfilSistema[];
    selecionarPerfilSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePefilSistema({
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