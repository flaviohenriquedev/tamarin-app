import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export type EndPointType = {
    listar?: EndPontDetail;
    buscarPorId?: EndPontDetail;
    salvar?: EndPontDetail;
    editar?: EndPontDetail;
    excluir?: EndPontDetail;
} & {
    [key: string]: EndPontDetail;
};

export type EndPontDetail = {
    caminho?: string;
    metodo: MetodoHTTP;
}