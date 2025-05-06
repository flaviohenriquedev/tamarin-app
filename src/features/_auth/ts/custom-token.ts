import {JWT} from "next-auth/jwt";

export type CustomToken = JWT & {
    id: string;
    name: string;
    email: string;
    accessToken: string;
};