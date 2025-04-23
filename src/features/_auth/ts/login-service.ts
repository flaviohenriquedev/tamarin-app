import {AuthService} from "@/features/_auth/ts/auth-service";
import {loginEndpoint} from "@/features/_auth/ts/login-endpoint";

export class LoginService extends AuthService{
    constructor() {
        super(loginEndpoint)
    }
}