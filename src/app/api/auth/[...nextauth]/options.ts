import CredentialsProvider from "next-auth/providers/credentials";
import {LoginService} from "@/features/_auth/ts/login-service";

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
        signIn: '/login',
        signOut: '/',
    },
    callbacks: {
        async jwt({ token, user }: any) {
            return {...token, ...user}
        },
        async session({ session, token }: any) {
            session.user = token;
            return session;
        }
    },
};