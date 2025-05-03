import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export type EndPoint = {
    listar?: DetalheEndPoint;
    salvar?: DetalheEndPoint;
    editar?: DetalheEndPoint;
    excluir?: DetalheEndPoint;
} & {
    [key: string]: DetalheEndPoint;
};

export type DetalheEndPoint = {
    caminho: string;
    metodo: MetodoHTTP;
}