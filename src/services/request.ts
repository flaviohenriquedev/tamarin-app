import {getSession} from "next-auth/react";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";
import Cookies from "js-cookie";

export async function request<T>(
    endpoint: string,
    method: MetodoHTTP,
    body?: unknown,
): Promise<T | null> {
    const session = await getSession();
    const token = session?.user?.accessToken;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    const clienteId = Cookies.get('cliente_id');

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        ...(clienteId ? { "X-Cliente-Id": clienteId } : {}),
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

