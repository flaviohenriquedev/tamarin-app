import {request} from "@/services/request";
import {EndPointType} from "@/types/_root/EndPointType";

export class CrudService<E> {
    protected endpoint: EndPointType;

    constructor(endpoint: EndPointType) {
        this.endpoint = endpoint;
    }

    async listar(): Promise<E[]> {
        if (!this.endpoint.listar) return [];
        const resultado = await request<E[]>(this.endpoint.listar.caminho, this.endpoint.listar.metodo);
        return resultado ?? [];
    }

    async salvar(data: E, callback?: () => void): Promise<E | null> {
        if (!this.endpoint.salvar) return null;
        return await request<E | null>(this.endpoint.salvar.caminho, this.endpoint.salvar.metodo, data)
            .then((response) => {
                if (callback) callback();
                return response
            });
    }

    async atualizar(id: string | number, data: E): Promise<E | null> {
        if (!this.endpoint.atualizar) return null;
        return await request<E | null>(
            `${this.endpoint.atualizar.caminho}/${id}`,
            this.endpoint.atualizar.metodo,
            data
        );
    }

    async deletar(id: string | number): Promise<boolean> {
        if (!this.endpoint.deletar) return false;
        await request<null>(`${this.endpoint.deletar.caminho}/${id}`, this.endpoint.deletar.metodo);
        return true;
    }
}