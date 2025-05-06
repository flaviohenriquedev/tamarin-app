import CredentialsProvider from "next-auth/providers/credentials";
import {LoginService} from "@/features/_auth/ts/login-service";
import type {NextAuthOptions, Session, User} from "next-auth";
import type {JWT} from "next-auth/jwt";
import {CustomToken} from "@/features/_auth/ts/custom-token";

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your-email" },
                senha: { label: "Senha", type: "password", placeholder: "your-password" },
            },
            async authorize(credentials) {
                const service = new LoginService();
                return await service.login(credentials?.email, credentials?.senha);
            }
        })
    ],
    pages: {
        signIn: '/auth/login',
        signOut: '/',
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User }): Promise<CustomToken> {
            if (user) {
                return { ...token, ...user };
            }
            return token as CustomToken;
        },

        async session({ session, token }: { session: Session; token: CustomToken }): Promise<Session> {
            session.user = {
                id: token.id,
                name: token.name,
                email: token.email,
                accessToken: token.accessToken
            };
            return session;
        }
    }
};
