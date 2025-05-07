import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";
import {Fieldset} from "@/components/ui/fieldset/fieldset";

import {rotasSistema} from "@/features/sistema/rotas";

import './css/style.css'
import {PermissoesModulos} from "@/features/manager/usuario/permissoes-modulos";
import {SistemaType} from "@/features/sistema/types";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {RoleUsuarioFactory} from "@/features/manager/usuario/ts/role-enum";
import {PermissoesItemSistema} from "@/features/manager/usuario/permissoes-item-sistema";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import {PermissoesItemCliente} from "@/features/manager/usuario/ts/permissoes-item-cliente";

type Props = {
    entidade: UsuarioDTO
}

const rolesSelectItem: TSelectItem[] = RoleUsuarioFactory.getSelectItens();
const service = new ClienteService();

export function UsuarioCamposFormulario({entidade}: Props) {

    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>(new Cliente());
    const [sistemaSelecionado, setSistemaSelecionado] = useState<SistemaType>();
    const [listaSistema, setListaSistema] = useState<SistemaType[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaClientes(result)
        });
    }, []);

    function selecionarCliente(cliente: Cliente) {
        if(cliente.sistemas && cliente.sistemas.length > 0) {
            setListaSistema(rotasSistema.filter(sistema => cliente.sistemas.includes(sistema.sistema.key)))
        } else {
            setListaSistema([])
        }
        setClienteSelecionado(cliente);
    }

    function selecionarSistema(sistema: SistemaType) {
        setSistemaSelecionado(sistema)
    }

    function renderizarRotas() {
        if (sistemaSelecionado) {
            return sistemaSelecionado.rotas.map(modulo => {
                return <PermissoesModulos key={modulo.title} modulo={modulo}/>
            })
        }
    }

    return (
        <div>
            <div>
                <LineContent>
                    <Label title={`Nome Completo`}>
                        <InputString atributo={`nome`} entidade={entidade}/>
                    </Label>
                    <Label title={`Email`}>
                        <InputString atributo={`email`} entidade={entidade}/>
                    </Label>
                    <Label title={`CPF`}>
                        <InputString atributo={`cpf`} entidade={entidade}/>
                    </Label>
                    <Label title={`Telefone`}>
                        <InputString atributo={`telefone`} entidade={entidade}/>
                    </Label>

                    <Checkbox label={`Usuário Master?`}/>
                </LineContent>
            </div>

            <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>
                <Fieldset label={`Clientes`} className={`cad-user-clients h-full`}>
                    <div>
                        <ul className={`flex flex-col gap-1`}>
                            {listaClientes && listaClientes.length > 0
                                ? listaClientes.map(cliente => {
                                    return (
                                        <PermissoesItemCliente
                                            key={cliente.id}
                                            destacar={clienteSelecionado.id === cliente.id}
                                            cliente={cliente}
                                            onClick={selecionarCliente} />
                                    )
                                }) : (
                                    <div className="skeleton h-full w-full"></div>
                                )}
                        </ul>
                    </div>
                </Fieldset>

                <Fieldset label={`Sistemas`} className={`cad-user-system h-full`}>
                    <div>
                        <ul className={`flex flex-col gap-1`}>
                            {listaSistema && listaSistema.length > 0 && listaSistema.map(sistema => {
                                return (
                                    <PermissoesItemSistema
                                        key={sistema.sistema.key}
                                        sistema={sistema}
                                        onSelect={selecionarSistema}
                                        valuesRadioGroup={rolesSelectItem}
                                        destacar={sistemaSelecionado && sistemaSelecionado.sistema.label === sistema.sistema.label}/>
                                )
                            })}
                        </ul>
                    </div>
                </Fieldset>

                <Fieldset label={`Módulos`}
                          className={`
                            absolute
                            cad-user-module
                            h-full
                            overflow-y-auto
                            scrollbar-thumb-base-300
                            scrollbar-track-transparent
                            scrollbar-thin`
                          }>
                    <div>
                        <ul>
                            {renderizarRotas()}
                        </ul>
                    </div>
                </Fieldset>
            </div>
        </div>
    )
}