import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import Providers from "@/providers/providers";
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
            className={`antialiased overflow-hidden bg-base-200 ${inter.className}`}
        >
        <Providers>
            <Toaster richColors position={`top-center`} icons={{
                success: <CircleCheckBig />,
                error: <CircleCheckBig />
            }}/>
            {children}
        </Providers>
        </body>

        </html>
    );
}
