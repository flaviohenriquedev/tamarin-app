import type {Metadata} from "next";
import {ReactNode} from "react";

import "./globals.css";
import Providers from "@/providers/providers";
import {Toaster} from "sonner";
import {CircleCheckBig} from "lucide-react";

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
            <Toaster richColors position={`top-right`} icons={{
                success: <CircleCheckBig />,
                error: <CircleCheckBig />
            }}/>
            {children}
        </Providers>
        </body>

        </html>
    );
}
