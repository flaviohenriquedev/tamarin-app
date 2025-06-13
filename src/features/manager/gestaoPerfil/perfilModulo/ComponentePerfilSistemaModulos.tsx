import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {RouteType} from "@/types/_root/RouteType";
import {ListChecks} from "lucide-react";
import Modal from "@/components/ui/modal/modal";
import {useCallback, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {LineContent} from "@/components/ui/line-content/line-content";
import {Button} from "@/components/ui/button/button";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum} from "@/enums/FuncionalidadeEnum";
import {PerfilModulo} from "@/features/manager/gestaoPerfil/perfilModulo/entidade/PerfilModulo";

type Props = {
    perfil: Perfil;
    className: string;
    listaModulos: RouteType[];
}

export function ComponentePerfilSistemaModulos({
                                                   perfil,
                                                   className,
                                                   listaModulos
                                               }: Props) {

    const [moduloSelecionado, setModuloSelecionado] = useState<RouteType>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [funcionalidadesSelectItens, setFuncionalidadesSelectItens] = useState<TSelectItem[]>([])

    const buscarFuncionalidadesPorModulo = useCallback((modulo: RouteType) => {
        const funcionalidades: TSelectItem[] = [];
        if (modulo.funcionalidades) {
            Object.entries(modulo.funcionalidades).map(([key, value]) => (
                funcionalidades.push(
                    {
                        label: value.label,
                        value: key
                    }
                )
            ));
        }
        if (funcionalidades) {
            return setFuncionalidadesSelectItens(funcionalidades)
        }
        return setFuncionalidadesSelectItens([])
    }, [])

    const onSelectModulo = useCallback((modulo: RouteType) => {
        setModuloSelecionado(modulo)
        buscarFuncionalidadesPorModulo(modulo)
        setOpenModal(true)
    }, [buscarFuncionalidadesPorModulo])

    function renderizarModulos(modulos: RouteType[]) {
        return modulos.map(modulo => {
            return (
                <li key={modulo.id}>
                    <div className={`
                        flex
                        items-center
                        gap-1.5
                        ${moduloAdicionado(modulo) ? 'text-primary font-semibold' : ''}
                    `}>
                        {modulo.subRoute ? '' : getItemOpenModal(modulo)}
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

    const moduloAdicionado = (modulo: RouteType) => {
        return perfil.perfilModulos.map(r => r.modulo).includes(modulo.modulo as ModuloENUM);
    }

    function getItemOpenModal(modulo: RouteType) {
        return (
            <div className={`
                    cursor-pointer
                    ${moduloAdicionado(modulo) ? 'text-primary font-bold' : ''}
                    `}
                 onClick={() => onSelectModulo(modulo)}>
                <ListChecks size={15}/>
            </div>
        )
    }

    function aplicarFuncionalidades() {
        const funcionalidadesSelecionadas = funcionalidadesSelectItens.filter(f => f.checked);

        if (funcionalidadesSelecionadas.length > 0 && moduloSelecionado?.modulo && perfil) {
            const funcArray = funcionalidadesSelecionadas.map(func => func.value as FuncionalidadeEnum);
            const moduloExistente = perfil.perfilModulos.find(
                modulo => modulo.modulo === moduloSelecionado.modulo
            );
            if (moduloExistente) {
                moduloExistente.funcionalidades = funcArray;
            } else {
                const novoPerfilModulo = new PerfilModulo();
                novoPerfilModulo.modulo = moduloSelecionado.modulo;
                novoPerfilModulo.funcionalidades = funcArray;
                perfil.perfilModulos.push(novoPerfilModulo);
            }
        }
        setOpenModal(false)
    }

    const isChecked = (funcionalidade: TSelectItem): boolean => {
        return perfil.perfilModulos.some(
            perfilModulo =>
                perfilModulo.modulo === moduloSelecionado?.modulo as string &&
                perfilModulo.funcionalidades.includes(funcionalidade.value as FuncionalidadeEnum)
        ) ?? false;
    };

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
                <div className={`flex flex-col gap-4 p-4`}>
                    <ul className={'grid grid-cols-4 gap-2 p-5 bg-base-200 rounded-sm'}>
                        {funcionalidadesSelectItens && funcionalidadesSelectItens.map((funcionalidade) => (
                            <li key={funcionalidade.value}
                                className={`
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        rounded-sm
                                        p-2
                                        ${isChecked(funcionalidade) ? 'text-primary font-semibold' : ''}
                                        `}>
                                <Checkbox
                                    entidade={funcionalidade}
                                    atributo={'checked'}
                                    classWhenChecked={`checkbox-primary`}
                                    isChecked={isChecked(funcionalidade)}/>
                                {funcionalidade.label}
                            </li>
                        ))}
                    </ul>

                    <LineContent justifyContent={'end'}>
                        <Button onClick={aplicarFuncionalidades}>Aplicar</Button>
                    </LineContent>
                </div>
            </Modal>
        </>
    )
}