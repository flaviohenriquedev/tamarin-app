import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

type Props = {
    className: string;
    listaPerfilSistema: PerfilSistema[];
}

export function ComponenteUsuarioPerfis({className, listaPerfilSistema}: Props) {

    return (
        <Fieldset label={`Perfis`}
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
                <ul>
                    {listaPerfilSistema && listaPerfilSistema.length > 0 && (
                        listaPerfilSistema.map(perfilSistema => {
                            return <li key={perfilSistema.id}>{perfilSistema.perfil.descricao}</li>
                        })
                    )}
                </ul>
            </div>
        </Fieldset>
    )
}