import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import ProvidersDefault from "@/providers/providers-default";
import {Toaster} from "sonner";
import {CircleCheckBig} from "lucide-react";
import {Inter} from "next/font/google";


export const metadata: Metadata = {
    title: "Tamarin",
    description: "Tamarin",
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
            <Toaster richColors position={`top-center`} icons={{
                success: <CircleCheckBig />,
                error: <CircleCheckBig />
            }}/>
            {children}
        </ProvidersDefault>
        </body>

        </html>
    );
}
