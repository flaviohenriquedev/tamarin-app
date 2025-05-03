import {PiDotsThreeFill} from "react-icons/pi";
import {LuFolderInput} from "react-icons/lu";
import {TRoute} from "@/types/TRoute";

export function formarBreadcrumb(path: string | null, rotas: TRoute[], caminho: TRoute[] = []): TRoute[] | null {
    for (const rota of rotas) {
        const novoCaminho = [...caminho, rota];
        getIcon(rota);
        if (rota.href === path) {
            return novoCaminho;
        }

        if (rota.subRoute) {
            const resultado = formarBreadcrumb(path, rota.subRoute, novoCaminho);
            if (resultado) return resultado;
        }
    }

    return null;
}

function getIcon(rota: TRoute) {

    if (rota.subRoute && !rota.icon) {
        rota.icon = <PiDotsThreeFill />
    }

    if (!rota.icon) {
        rota.icon = <LuFolderInput />
    }
}