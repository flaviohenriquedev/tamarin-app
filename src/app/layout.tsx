import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import Providers from "@/providers/providers";
import {Toaster} from "react-hot-toast";

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
            <Toaster position="top-center" />
            {children}
        </Providers>
        </body>

        </html>
    );
}
