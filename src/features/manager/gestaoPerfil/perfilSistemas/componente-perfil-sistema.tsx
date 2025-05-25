import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {useCallback, useState} from "react";
import {
    ComponentePerfilSistemaItens
} from "@/features/manager/gestaoPerfil/perfilSistemas/componente-perfil-sistema-itens";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    className: string;
    listaPerfilSistema: PerfilSistema[];
    selecionarPerfilSistema: (perfilSistema: PerfilSistema) => void;
}

export function ComponentePerfilSistema({
                                            className,
                                            listaPerfilSistema,
                                            selecionarPerfilSistema
                                        }: Props) {

    const [idSelecionado, setIdSelecionado] = useState<string>('')

    const selectPerfilSistema = useCallback((perfilSistema: PerfilSistema) => {
        setIdSelecionado(perfilSistema.clienteSistema.id)
        selecionarPerfilSistema(perfilSistema)
    }, [selecionarPerfilSistema])

    return (
        <Fieldset label={`Sistemas`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaPerfilSistema
                    && listaPerfilSistema.length > 0
                    && listaPerfilSistema.map(perfilSistema => {
                        return (
                            <ComponentePerfilSistemaItens
                                key={perfilSistema.clienteSistema.keySistema}
                                perfilSistema={perfilSistema}
                                onClick={selectPerfilSistema}
                                destacar={idSelecionado === perfilSistema.clienteSistema.id}/>
                        )
                    })}
            </ul>
        </Fieldset>
    )
}