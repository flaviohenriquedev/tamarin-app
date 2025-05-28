import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export type EndPointType = {
    listar: EndPontDetail;
    buscarPorId: EndPontDetail;
    salvar: EndPontDetail;
    editar: EndPontDetail;
    deletar: EndPontDetail;
}

export type EndPontDetail = {
    caminho?: string;
    metodo: MetodoHTTP;
}