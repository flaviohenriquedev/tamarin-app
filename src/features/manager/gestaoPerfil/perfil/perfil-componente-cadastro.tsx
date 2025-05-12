import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useCallback, useEffect, useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

import '@/features/manager/gestaoPerfil/perfil/css/style.css'
import Modal from "@/components/ui/modal/modal";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {set} from "lodash";
import {ComponentePefilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/componente-pefil-sistema";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/componente-perfil-sistema-modulos";
import {ComponentePerfilCliente} from "@/features/manager/gestaoPerfil/perfil/componente-perfil-cliente";
import './css/style.css'
import {PerfilService} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-service";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {RouteType} from "@/types/_root/RouteType";

type Props = {
    entidade: Perfil;
}

export type RouteTypeToSelect = RouteType & { checked: boolean };

const service = new PerfilService();
const clienteService = new ClienteService();

export function PerfilComponenteCadastro({entidade}: Props) {

    const [listaClientes, setListaClientes] = useState<Cliente[]>([])

    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>(new Cliente())
    const [clienteSistemaSelecionado, setClienteSistemaSelecionado] = useState<ClienteSistema>();

    const [perfilRotas, setPerfilRotas] = useState<PerfilSistemaModulo[]>([])
    const [listaClienteSistema, setListaClienteSistema] = useState<ClienteSistema[]>([]);
    const [listaClienteSistemaCheck, setListaClienteSistemaCheck] = useState<ClienteSistema[]>([]);

    // perfil sistema
    const [perfilSistemaSelecionado, setPerfilSistemaSelecionado] = useState<PerfilSistema>();
    const [listaPerfilSistema, setListaPerfilSistema] = useState<PerfilSistema[]>([])

    const [listaModulos, setListaModulos] = useState<RouteTypeToSelect[]>([])

    // perfil sistema rotas
    const [listaPerfilSistemaModulo, setListaPerfilSistemaModulo] = useState<PerfilSistemaModulo[]>([])

    const [abrirModalCadastroPerfil, setAbrirModalCadastroPerfil] = useState<boolean>(false);

    useEffect(() => {
        clienteService.listar().then(retorno => setListaClientes(retorno));
    }, []);

    useEffect(() => {
        set(entidade, 'rotas', perfilRotas)
    }, [entidade, perfilRotas]);

    useEffect(() => {
        if (listaPerfilSistema.length > 0) set(entidade, 'sistemas', listaPerfilSistema);
    }, [entidade, listaPerfilSistema]);

    const montarPerfilSistemaModulos = useCallback((rotas: RouteType[]) => {
        const perfilSistemaModulos: PerfilSistemaModulo[] = [];
        rotas.forEach(rota => {
            const perfilSistemaModulo: PerfilSistemaModulo = new PerfilSistemaModulo();
            perfilSistemaModulo.isLista = !!rota.subRoute;
            if (rota.module) perfilSistemaModulo.modulo = rota.module
            perfilSistemaModulos.push(perfilSistemaModulo)

            if (rota.subRoute) (montarPerfilSistemaModulos(rota.subRoute))
        })
        setListaPerfilSistemaModulo(perfilSistemaModulos)
    }, []);

    useEffect(() => {
        const rotas = rotasSistema
            .find(rs => rs.sistema === perfilSistemaSelecionado?.clienteSistema.keySistema)?.rotas || [];
        if(rotas && rotas.length > 0) {
            montarPerfilSistemaModulos(rotas)
        } else {
            setListaPerfilSistemaModulo([])
        }
    }, [montarPerfilSistemaModulos, perfilSistemaSelecionado]);

    const selecionarCliente = useCallback((
        (cliente: Cliente) => {
            if (cliente.sistemas && cliente.sistemas.length > 0) {
                const perfisSistema: PerfilSistema[] = [];
                cliente.sistemas.forEach(sistema => {
                    const perfilSistema = new PerfilSistema();
                    perfilSistema.clienteSistema = sistema;
                    perfisSistema.push(perfilSistema);
                })
                setListaPerfilSistema(perfisSistema)
                setListaClienteSistema(cliente.sistemas)
            }
            setClienteSelecionado(cliente);
            set(entidade, 'cliente', cliente)
        }
    ), [entidade])

    function selecionarClienteSistema(clienteSistema: ClienteSistema) {
        setClienteSistemaSelecionado(clienteSistema)
    }

    function selecionarPerfilSistema(perfilSistema: PerfilSistema) {
        setPerfilSistemaSelecionado(perfilSistema)
    }

    function checkSistema(clienteSistema: ClienteSistema) {
        setListaClienteSistemaCheck(prev => [...prev, clienteSistema])
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

                    <ComponentePerfilCliente
                        className={'cad-user-clients'}
                        listaClientes={listaClientes}
                        selecionarCliente={selecionarCliente}/>

                    <ComponentePefilSistema
                        className={'cad-user-system'}
                        listaClienteSistema={listaClienteSistema}
                        listaPerfilSistema={listaPerfilSistema}
                        selecionarClienteSistema={selecionarClienteSistema}
                        selecionarPerfilSistema={selecionarPerfilSistema}/>

                    <ComponentePerfilSistemaModulos
                        className={'cad-user-module'}
                        clienteSistemaSelecionado={clienteSistemaSelecionado}
                        listaPerfilSistemaModulo={listaPerfilSistemaModulo}
                        listaModulos={listaModulos}
                    />

                </div>
            </div>
            <Modal isOpen={abrirModalCadastroPerfil}
                   setIsOpen={setAbrirModalCadastroPerfil}>
                Cadastro de perfil
            </Modal>
        </>
    )
}