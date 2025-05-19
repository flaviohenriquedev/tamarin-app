import {ResponseAuth} from "@/features/_auth/ts/response-auth";

export type UsuarioType = InstanceType<ResponseAuth> & {
    accessToken: string;
    expiresToken: Date;
    refreshToken: string;
    expiresRefreshtoken: Date
};

declare module "next-auth" {
    interface Session {
        user: UsuarioType;
    }
}

declare module "next-auth/jwt" {
    type JWT = UsuarioType
}