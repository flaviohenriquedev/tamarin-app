import {EndPointType} from "@/types/_root/EndPointType";
import {ResponseAuth} from "@/features/_auth/ts/response-auth";

export class AuthService {
    protected endpoint: EndPointType;
    private baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    constructor(endpoint: EndPointType) {
        this.endpoint = endpoint;
    }

    async login(email?: string, senha?: string): Promise<ResponseAuth | null> {
        if (this.endpoint.login) {
            const response = await fetch(`${this.baseUrl}${this.endpoint.login.caminho}`, {
                method: this.endpoint.login.metodo,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, senha})
            });
            console.log('RESPONSE LOGIN', response);
            return await response.json();
        }
        return null;
    }
}