'use client'

import {useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

type Options = {
    redirectIfAuthenticated?: boolean;
    redirectTo?: string;
};

export function useAuthRedirect({
                                    redirectIfAuthenticated = false,
                                    redirectTo = "/auth/login"
                                }: Options = {}) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated" && !redirectIfAuthenticated) {
            router.replace(redirectTo);
        }
        if (status === "authenticated" && redirectIfAuthenticated) {
            router.replace(redirectTo);
        }
    }, [status, router, redirectIfAuthenticated, redirectTo]);

    return status;
}
