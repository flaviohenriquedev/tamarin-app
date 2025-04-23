import {Usuario} from "@/features/common/usuario/ts/usuario";

type UsuarioType = InstanceType<typeof Usuario> & {
    accessToken: string;
};

declare module "next-auth" {
    interface Session {
        user: UsuarioType
    }
}
