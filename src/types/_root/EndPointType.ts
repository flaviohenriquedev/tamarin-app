import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export type EndPointType = {
    listar: EndPontDetail;
    buscarPorId: EndPontDetail;
    salvar: EndPontDetail;
    editar: EndPontDetail;
    deletar: EndPontDetail;
} & {[k: string]: EndPontDetail}

export type EndPontDetail = {
    caminho?: string;
    metodo: MetodoHTTP;
}