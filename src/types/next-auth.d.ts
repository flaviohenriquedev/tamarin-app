import {Usuario} from "@/features/manager/usuario/ts/usuario";

type UsuarioType = InstanceType<typeof Usuario> & {
    accessToken: string;
};

declare module "next-auth" {
    interface Session {
        user: UsuarioType
    }
}
