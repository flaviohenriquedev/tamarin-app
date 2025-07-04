import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import ProvidersDefault from "@/providers/providers-default";
import {Inter} from "next/font/google";
import {ToastContainer} from 'react-toastify';

export const metadata: Metadata = {
    title: "Gommo",
    description: "Gommo",
};


const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'], // ou outros pesos que tu for usar
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body
            className={`
            antialiased
            overflow-hidden
            bg-system
            text-neutral-700
             ${inter.className}`}
        >
        <ProvidersDefault>
            <ToastContainer position={`top-center`}/>
            {children}
        </ProvidersDefault>
        </body>

        </html>
    );
}
