import {EndPoint} from "@/types/TEndpoint";
import {Usuario} from "@/features/gerenciamento-sistema/gestao-usuario/usuario/ts/usuario";

export class AuthService {
    protected endpoint: EndPoint;
    private baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    constructor(endpoint: EndPoint) {
        this.endpoint = endpoint;
    }

    async login(email?: string, senha?: string): Promise<Usuario> {
        if (this.endpoint.login) {
            const response = await fetch(`${this.baseUrl}${this.endpoint.login.caminho}`, {
                method: this.endpoint.login.metodo,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, senha})
            });
            return await response.json();
        }
        return new Usuario();
    }

}