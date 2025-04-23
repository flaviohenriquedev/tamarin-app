'use server'

import {signIn} from "next-auth/react";

export default async function loginAction(_prevState: unknown, formData: FormData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get("email") as string,
            senha: formData.get("senha") as string,
            redirect: false
        });
        if (response?.error) {
            return { success: false, error: response.error };
        }

        return { success: true };
    } catch (error) {
        return { success: false, error: error };
    }
}
