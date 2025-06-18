import {signOut} from "next-auth/react";
import Cookies from "js-cookie";
import {SistemaType} from "@/features/sistema/types";
import {RouteType} from "@/types/_root/RouteType";
import {sistemasModulos, sistemasModulosMaster} from "@/features/sistema/sistemasModulos";
import {DadosAcesso, Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {ModuloENUM} from "@/enums/ModuloEnum";

export async function logout() {
    await signOut({redirect: false}).then(() => {
        localStorage.removeItem("sistemaSelecionado")
        localStorage.removeItem("empresaId")
        Cookies.remove("empresa_id")
    })
}

export function getRotasPorSistema(sistema: SistemaType): RouteType[] {
    let rotas: RouteType[] = [];
    if (sistema.sistemaMaster) {
        const retorno = sistemasModulosMaster.find(sm => sm.sistema === sistema.sistema)
        if (retorno) {
            rotas = retorno.rotas;
        }
    } else {
        const retorno = sistemasModulos.find(sm => sm.sistema === sistema.sistema)
        if (retorno) {
            rotas = retorno.rotas;
        }
    }
    return rotas
}

export function usuarioPossuiAcessoAoModulo(rota: RouteType, usuarioLogado: Usuario): boolean {
    if (usuarioLogado.usuarioMaster) return true;

    if (rota.subRoute && rota.subRoute.length > 0) {
        return rota.subRoute.some(sub => usuarioPossuiAcessoAoModulo(sub, usuarioLogado));
    }

    if (rota.modulo) {
        const dadosAcessoUsuario: DadosAcesso[] = usuarioLogado.dadosAcesso;
        const sistemasUsuario = dadosAcessoUsuario.flatMap(da => da.sistemas);
        const modulosUsuario = sistemasUsuario.flatMap(su => su.modulos);
        const modulosUsuarioEnums = modulosUsuario.map(mu => mu.modulo);
        return modulosUsuarioEnums.includes(rota.modulo);
    }

    return false;
}

export function getModuloInfos(rotas: RouteType[], modulo: ModuloENUM): RouteType {
    for (const rota of rotas) {
        let moduloEncontrado;
        if (rota.subRoute) {
            moduloEncontrado = rota.subRoute.find(
                (sub) => sub.modulo === modulo
            );
            if (moduloEncontrado) {
                return moduloEncontrado
            }
        } else if (rota.modulo) {
            if (rota.modulo === modulo) {
                return rota;
            }
        }
    }
    throw new Error(`Módulo ${modulo} não encontrado nas rotas`);
}