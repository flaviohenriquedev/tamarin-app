import CredentialsProvider from "next-auth/providers/credentials";
import {LoginService} from "@/features/_auth/ts/login-service";
import {Session, User} from "next-auth";
import {UsuarioType} from "@/types/next-auth";

export const nextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "email",
                    placeholder: "your-email",
                },
                senha: {
                    label: "senha:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) {
                const service = new LoginService();
                const usuario = await service.login(credentials?.email, credentials?.senha);

                if (usuario && usuario.id) {
                    return usuario;
                }

                return null;
            }
        }),
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/',
    },
    callbacks: {
        async jwt({ token, user }: { token: UsuarioType; user?: User }) {
            return {...token, ...user}
        },
        async session({ session, token }: { session: Session; token: UsuarioType }) {
            session.user = token;
            return session;
        }
    },
};