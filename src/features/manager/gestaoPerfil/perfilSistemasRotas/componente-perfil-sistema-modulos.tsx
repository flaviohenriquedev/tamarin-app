import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import {RouteType} from "@/types/_root/RouteType";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {ListChecks} from "lucide-react";
import Modal from "@/components/ui/modal/modal";
import {useCallback, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {ModuloFactory} from "@/enums/ModuloEnum";
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";

type Props = {
    perfilSistema?: PerfilSistema;
    className: string
    listaModulos: RouteType[]
}

export function ComponentePerfilSistemaModulos({
                                                   perfilSistema,
                                                   className,
                                                   listaModulos
                                               }: Props) {

    const [moduloSelecionado, setModuloSelecionado] = useState<RouteType>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [funcionalidadesSelectItens, setFuncionalidadesSelectItens] = useState<TSelectItem[]>([])

    const buscarFuncionalidadesPorModulo = useCallback((
        (modulo: RouteType) => {
            if (modulo.module) {
                setFuncionalidadesSelectItens(ModuloFactory.getFuncionalidadesSelectItens(modulo.module))
            }
        }
    ), [])

    const onSelectModulo = useCallback((
        (modulo: RouteType) => {
            setModuloSelecionado(modulo)
            buscarFuncionalidadesPorModulo(modulo)
            setOpenModal(true)
        }
    ), [buscarFuncionalidadesPorModulo])

    function renderizarModulos(modulos: RouteType[]) {
        return modulos.map(modulo => {
            return (
                <li key={modulo.id}>
                    <div className={'flex items-center gap-1.5'}>
                        {modulo.subRoute ? '' : getItemCheck(modulo)}
                        {modulo.title}
                    </div>
                    {modulo.subRoute && (
                        <ul className={'pl-4'}>
                            {renderizarModulos(modulo.subRoute)}
                        </ul>
                    )}
                </li>
            )
        })
    }

    function getItemCheck(modulo: RouteType) {
        return (
            <div className={'cursor-pointer'}
                 onClick={() => onSelectModulo(modulo)}>
                <ListChecks size={15}/>
            </div>
        )
    }

    function aplicarFuncionalidades() {
        const funcionalidadesSelecionadas = funcionalidadesSelectItens.filter(f => f.checked);

        if (
            funcionalidadesSelecionadas.length > 0 &&
            moduloSelecionado?.module &&
            perfilSistema
        ) {
            const funcArray = funcionalidadesSelecionadas.map(func => func.value as string);
            const moduloExistente = perfilSistema.rotas.find(
                rota => rota.modulo === moduloSelecionado.module
            );

            if (moduloExistente) {
                moduloExistente.roles = funcArray;
            } else {
                const novoPerfilSistemaModulo = new PerfilSistemaModulo();
                novoPerfilSistemaModulo.modulo = moduloSelecionado.module;
                novoPerfilSistemaModulo.roles = funcArray;
                perfilSistema.rotas.push(novoPerfilSistemaModulo);
            }
        }
        setOpenModal(false);
    }


    return (
        <>
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
                    <ul>
                        {renderizarModulos(listaModulos)}
                    </ul>
                </div>
            </Fieldset>

            <Modal
                title={`Selecionar Funcionalidades: ${moduloSelecionado?.title}`}
                isOpen={openModal}
                setIsOpen={setOpenModal}>
                <div>
                    <ul className={'grid grid-cols-4'}>
                        {funcionalidadesSelectItens && funcionalidadesSelectItens.map((funcionalidade) => (
                            <li key={funcionalidade.value}
                                className={`
                                        cursor-pointer
                                        rounded-md
                                        p-1
                                        `}>
                                <Checkbox entidade={funcionalidade} atributo={'checked'}/>
                                {funcionalidade.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <LineContent justifyContent={'end'}>
                    <Button onClick={aplicarFuncionalidades}>Aplicar</Button>
                </LineContent>
            </Modal>
        </>
    )
}