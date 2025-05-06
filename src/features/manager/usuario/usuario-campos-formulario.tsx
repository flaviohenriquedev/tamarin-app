import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";
import {RoleUsuarioFactory} from "@/features/manager/usuario/ts/role-enum";
import {useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";
import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {ModuloType, rotasSistema} from "@/features/sistema/rotas";
import {TRoute} from "@/types/_root/TRoute";

import './css/style.css'
import {Dot} from "lucide-react";

type Props = {
    entidade: UsuarioDTO
}

const rolesSelectItem: TSelectItem[] = RoleUsuarioFactory.getSelectItens();
const service = new ClienteService();

export function UsuarioCamposFormulario({entidade}: Props) {

    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>(new Cliente());
    const [sistemaSelecionado, setSistemaSelecionado] = useState<ModuloType>();

    useEffect(() => {
        service.listar().then(result => {
            setListaClientes(result)
        });
    }, []);

    function selecionarCliente(cliente: Cliente) {
        setClienteSelecionado(cliente);
    }

    function selecionarSistema(sistema: ModuloType) {
        setSistemaSelecionado(sistema)
    }

    function renderizarRotas() {
        if (sistemaSelecionado) {
            return sistemaSelecionado.rotas.map(modulo => {
                return (
                    <li key={modulo.title} className={`flex flex-col gap-1 px-2 py-1`}>
                        <div className={`flex items-center gap-3`}>
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" />
                            <label className={`text-sm`}>{modulo.title}</label>
                        </div>
                        {modulo.subRoute && (
                            <ul>
                                {renderizarSubrotas(modulo.subRoute)}
                            </ul>
                        )}
                    </li>
                )
            })
        }
    }

    function renderizarSubrotas(subrotas: TRoute[]) {
        return subrotas.map(rota => {
            return (
                <li key={rota.title}
                    className={`cursor-default hover:bg-base-100 rounded-md`}>
                    <div className={`flex items-center gap-3`}>
                        <Dot size={16}/>
                        {rota.title}
                    </div>
                    {rota.subRoute && renderizarSubrotas(rota.subRoute)}
                </li>
            )
        })
    }

    return (
        <div>
            {/*parte de cima*/}
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
                </LineContent>
            </div>

            {/*parte de baixo*/}
            <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>
                <Fieldset label={`Clientes`} className={`cad-user-clients h-full`}>
                    <div>
                        <ul>
                            {listaClientes && listaClientes.length > 0
                                ? listaClientes.map(cliente => {
                                    return (
                                        <li key={cliente.id}
                                            className={`
                                               cursor-default
                                               p-2
                                               rounded-md
                                               ${clienteSelecionado.id === cliente.id ? 'bg-primary' : 'hover:bg-base-100'}`}
                                            onClick={() => selecionarCliente(cliente)}>
                                            {cliente.nomeFantasia}
                                        </li>
                                    )
                                }) : (
                                    <div className="skeleton h-full w-full"></div>
                                )}
                        </ul>
                    </div>
                </Fieldset>

                <Fieldset label={`Sistemas`} className={`cad-user-system h-full`}>
                    <div>
                        <ul>
                            {rotasSistema.map(sistema => {
                                return (
                                    <li key={sistema.titulo}
                                        className={`
                                               cursor-default
                                               p-2
                                               rounded-md
                                               ${sistemaSelecionado && sistemaSelecionado.titulo === sistema.titulo ? 'bg-primary' : 'hover:bg-base-100'}`}
                                        onClick={() => selecionarSistema(sistema)}>
                                        {sistema.titulo}
                                    </li>
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
                            scrollbar-thin`}>
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