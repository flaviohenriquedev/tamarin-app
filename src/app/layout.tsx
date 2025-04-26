import type {Metadata} from "next";
import {ReactNode} from "react";
import Providers from "@/providers/providers";


import "./globals.css";
import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";

export const metadata: Metadata = {
    title: "Tamarin",
    description: "Tamarin",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body
            className={`antialiased overflow-hidden bg-background`}
        >
        <PrelineScriptWrapper/>
        <Providers>
            {children}
        </Providers>
        </body>

        </html>
    );
}
