import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useEffect, useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {Fieldset} from "@/components/ui/fieldset/fieldset";

import {rotasSistema} from "@/features/sistema/rotas-sistema";

import './css/style.css'
import {PermissoesItemSistema} from "@/features/manager/usuario/permissoes-item-sistema";
import {PermissoesItemCliente} from "@/features/manager/usuario/permissoes-item-cliente";
import Modal from "@/components/ui/modal/modal";
import {PerfilService} from "@/features/manager/perfil/ts/perfil-service";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Perfil, PerfilRota} from "@/features/manager/perfil/ts/perfil";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {PermissoesModulos} from "@/features/manager/usuario/permissoes-modulos";
import {set} from "lodash";

type Props = {
    entidade: Perfil;
}

const service = new PerfilService();
const clienteService = new ClienteService();

export function PerfilComponenteCadastro({entidade}: Props) {

    const [listaCliente, setListaCliente] = useState<Cliente[]>([])
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>(new Cliente())
    const [clienteSistemaSelecionado, setClienteSistemaSelecionado] = useState<ClienteSistema>();
    const [perfilRotas, setPerfilRotas] = useState<PerfilRota[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([]);

    const [abrirModalCadastroPerfil, setAbrirModalCadastroPerfil] = useState<boolean>(false);

    useEffect(() => {
        clienteService.listar().then(retorno => setListaCliente(retorno));
    }, []);

    useEffect(() => {
        set(entidade, 'rotas', perfilRotas)
        console.log('ENTIDADE ->', entidade)
    }, [entidade, perfilRotas]);

    function selecionarCliente(cliente: Cliente) {
        if (cliente.sistemas && cliente.sistemas.length > 0) {
            setListaClienteSistema(cliente.sistemas)
        }
        setClienteSelecionado(cliente);
    }

    function selecionarSistema(sistema: ClienteSistema) {

        setClienteSistemaSelecionado(sistema)
    }

    function renderizarRotas() {
        if (clienteSistemaSelecionado) {
            const sistemaSelecionado = rotasSistema.find(
                rs => rs.sistema === clienteSistemaSelecionado.keySistema
            )
            if (sistemaSelecionado) {
                return sistemaSelecionado.rotas.map(modulo => {
                    return <PermissoesModulos
                                key={modulo.title}
                                modulo={modulo}
                                statePerfilRotas={{
                                    val: perfilRotas,
                                    func: setPerfilRotas
                                }}/>
                })
            }
        }
    }

    return (
        <>
            <div>
                <LineContent>
                    <Label title={`Descrição`}>
                        <InputString atributo={`descricao`} entidade={entidade}/>
                    </Label>
                </LineContent>

                <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>
                    <Fieldset label={`Clientes`} className={`cad-user-clients h-full`}>
                        <div>
                            <ul className={`flex flex-col gap-1`}>
                                {listaCliente && listaCliente.length > 0
                                    ? listaCliente.map(cliente => {
                                        return (
                                            <PermissoesItemCliente
                                                key={cliente.id}
                                                destacar={clienteSelecionado.id === cliente.id}
                                                cliente={cliente}
                                                onClick={selecionarCliente}/>
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
                                {listaClienteSistema && listaClienteSistema.length > 0 && listaClienteSistema.map(sistema => {
                                    return (
                                        <PermissoesItemSistema
                                            key={sistema.keySistema}
                                            sistema={sistema}
                                            onSelect={selecionarSistema}
                                            destacar={clienteSistemaSelecionado && clienteSistemaSelecionado.keySistema === sistema.keySistema}/>
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
                        <div className={`flex flex-col gap-4`}>
                            <ul>
                                {renderizarRotas()}
                            </ul>
                        </div>
                    </Fieldset>
                </div>
            </div>
            <Modal isOpen={abrirModalCadastroPerfil}
                   setIsOpen={setAbrirModalCadastroPerfil}>
                Cadastro de perfil
            </Modal>
        </>
    )
}