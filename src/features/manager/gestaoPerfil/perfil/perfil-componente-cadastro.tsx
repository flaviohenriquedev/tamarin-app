import {LineContent} from "@/components/ui/line-content/line-content";
import {InputString} from "@/components/ui/input/input-string";
import {Label} from "@/components/ui/label/label";
import {useCallback, useEffect, useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

import '@/features/manager/gestaoPerfil/perfil/css/style.css'
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {set} from "lodash";
import {ComponentePefilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/componente-pefil-sistema";
import {
    ComponentePerfilSistemaModulos
} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/componente-perfil-sistema-modulos";
import {ComponentePerfilCliente} from "@/features/manager/gestaoPerfil/perfil/componente-perfil-cliente";
import './css/style.css'
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {rotasSistema} from "@/features/sistema/rotas-sistema";
import {RouteType} from "@/types/_root/RouteType";

type Props = {
    entidade: Perfil
}

const clienteService = new ClienteService();

export function PerfilComponenteCadastro({entidade}: Props) {
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])
    const [listaModulos, setListaModulos] = useState<RouteType[]>([])
    const [perfilSistemaSelecionado, setPerfilSistemaSelecionado] = useState<PerfilSistema>();
    const [listaPerfilSistema, setListaPerfilSistema] = useState<PerfilSistema[]>([])

    useEffect(() => {
        clienteService.listar().then(retorno => setListaClientes(retorno));
    }, []);

    useEffect(() => {
        if (listaPerfilSistema.length > 0) set(entidade, 'sistemas', listaPerfilSistema);
    }, [entidade, listaPerfilSistema]);

    useEffect(() => {
        const rotas = rotasSistema.find(rs => rs.sistema === perfilSistemaSelecionado?.clienteSistema.keySistema)?.rotas || [];
        if (rotas && rotas.length > 0) {
            setListaModulos(rotas)
        } else {
            setListaModulos([])
        }
    }, [perfilSistemaSelecionado]);

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
            } else {
                setListaPerfilSistema([])
            }
            set(entidade, 'cliente.id', cliente.id)
        }
    ), [entidade])

    function selecionarPerfilSistema(perfilSistema: PerfilSistema) {
        setPerfilSistemaSelecionado(perfilSistema)
    }

    return (
        <>
            <LineContent>
                <Label title={`Descrição`}>
                    <InputString
                        name={`descricao`}
                        atributo={`descricao`}
                        entidade={entidade}
                        required/>
                </Label>
            </LineContent>

            <div className={`relative cad-user-container gap-2 h-auto min-h-[30rem] max-h-[40rem]`}>

                <ComponentePerfilCliente
                    className={'cad-user-clients'}
                    listaClientes={listaClientes}
                    selecionarCliente={selecionarCliente}/>

                <ComponentePefilSistema
                    className={'cad-user-system'}
                    listaPerfilSistema={listaPerfilSistema}
                    selecionarPerfilSistema={selecionarPerfilSistema}/>

                <ComponentePerfilSistemaModulos
                    perfilSistema={perfilSistemaSelecionado}
                    className={'cad-user-module'}
                    listaModulos={listaModulos}
                />
            </div>
        </>
    )
}