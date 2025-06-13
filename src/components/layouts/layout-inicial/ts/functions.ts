import {RouteType} from "@/types/_root/RouteType";
import {sistemasModulos, sistemasModulosMaster} from "@/features/sistema/sistemasModulos";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {DadosAcesso, Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {SistemaType} from "@/features/sistema/types";

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

export function usuarioPossuiAcesso(modulo: ModuloENUM, usuarioLogado: Usuario): boolean {

    if (usuarioLogado.usuarioMaster) return true;

    const dadosAcessoUsuario: DadosAcesso[] = usuarioLogado.dadosAcesso;
    const sistemasUsuario = dadosAcessoUsuario.flatMap(da => da.sistemas)
    const modulosUsuario = sistemasUsuario.flatMap(su => su.modulos)
    const modulosUsuarioEnums = modulosUsuario.map(mu => mu.modulo)
    return modulosUsuarioEnums.includes(modulo)
}