import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {Checkbox} from "@/components/ui/checkbox/checkbox";

type Props = {
    className: string;
    listaPerfil: Perfil[];
}

export function ComponenteUsuarioPerfil({className, listaPerfil}: Props) {
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
                    {listaPerfil && listaPerfil.length > 0 && (
                        listaPerfil.map(perfil => {
                            return <li key={perfil.id}>
                                <div>
                                    <Checkbox entidade={perfil}
                                              label={`${perfil.descricao}`}
                                              atributo={'checked'}/>
                                </div>
                            </li>
                        })
                    )}
                </ul>
            </div>
        </Fieldset>
    )
}