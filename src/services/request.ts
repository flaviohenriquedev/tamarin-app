import {getSession} from "next-auth/react";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export async function request<T>(
    endpoint: string,
    method: MetodoHTTP,
    body?: unknown,
): Promise<T | null> {
    const session = await getSession();
    const token = session?.user?.token;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    };

    const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

