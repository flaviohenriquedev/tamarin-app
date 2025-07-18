import {request} from "@/services/request";
import {EndPointType, EndPontDetail} from "@/types/_root/EndPointType";
import {getToastError} from "@/components/ui/toasts/toast-error/ToastError";
import {getToastSuccess} from "@/components/ui/toasts/toast-success/ToastSuccess";

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
            const resultado = await request<E>(
                `${this.getURL(this.getBaseURL(), this.getEndpoint().buscarPorId, id)}`,
                this.getEndpoint().buscarPorId?.metodo);
            return resultado ?? null;
        }
        return null;
    }

    async salvar(data: E, callback?: () => void): Promise<E | null> {
        if (this.getEndpoint().salvar) {
            const resultado = await request<E | null>(
                `${this.getURL(this.getBaseURL(), this.getEndpoint().salvar)}`,
                this.getEndpoint().salvar?.metodo,
                data).then(response => {
                getToastSuccess("Cadastro realizado com sucesso.")
                return response
            }).catch(error => {
                getToastError(error.message);
                return null
            });
            if (callback) callback();
            return resultado;
        }
        return null;
    }

    async excluir(id: string | number): Promise<boolean> {
        if (this.getEndpoint().deletar) {
            await request<boolean>(`${this.getURL(this.getBaseURL(), this.getEndpoint().deletar, id)}`, this.getEndpoint().deletar?.metodo)
                .then(() => {
                    getToastSuccess("Registro deletado com sucesso.")
                    return true;
                }).catch(error => {
                    getToastError(error.message);
                    return false;
                });
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