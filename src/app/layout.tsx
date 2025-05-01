import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import Providers from "@/providers/providers";

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
            className={`antialiased overflow-hidden`}
        >
        <Providers>
            {children}
        </Providers>
        </body>

        </html>
    );
}
