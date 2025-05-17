import {request} from "@/services/request";
import {EndPointType, EndPontDetail} from "@/types/_root/EndPointType";

export abstract class CrudService<E> {

    public abstract getBaseURL(): string;

    public abstract getEndpoint(): EndPointType;

    async listar(): Promise<E[]> {
        if (this.getEndpoint().listar) {
            const resultado = await request<E[]>(
                `${this.getURL(this.getBaseURL(), this.getEndpoint().listar)}`,
                this.getEndpoint().listar?.metodo);
            return resultado ?? [];
        }
        return [];
    }

    async buscarPorId(id: string): Promise<E | null> {
        if (this.getEndpoint().buscarPorId) {
            const resultado = await request<E>(`
                ${this.getURL(this.getBaseURL(), this.getEndpoint().buscarPorId, id)}`,
                this.getEndpoint().buscarPorId?.metodo);
            return resultado ?? null;
        }
        return null;
    }

    async salvar(data: E, callback?: () => void): Promise<E | null> {
        if (this.getEndpoint().salvar) {
            const resultado = await request<E | null>(`
                ${this.getURL(this.getBaseURL(), this.getEndpoint().salvar)}`,
                this.getEndpoint().salvar?.metodo,
                data);
            if (callback) callback();
            return resultado;
        }
        return null;
    }

    async excluir(id: string | number): Promise<boolean> {
        if (this.getEndpoint().excluir) {
            await request<null>(`${this.getURL(this.getBaseURL(), this.getEndpoint().excluir, id)}`, this.getEndpoint().excluir?.metodo);
            return true;
        }
        return false;
    }

    private getURL(baseURL: string, endpoint: EndPontDetail | undefined | null, parameter?: string | number): string {
        if (endpoint?.caminho?.length) {
            const cleanBase = baseURL.replace(/\/+$/, '');
            const cleanPath = endpoint.caminho.replace(/^\/+/, '');
            let url = `${cleanBase}/${cleanPath}`;
            if (url.includes(':id')) {
                url = url.replace(':id', parameter ? parameter.toString() : '');
            }
            return url.replace(/\/+$/, '');
        }
        return baseURL.replace(/\/+$/, '');
    }
}