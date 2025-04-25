'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {FormularioLogin} from "@/features/_auth/formulario-login";

export default function PaginaLogin() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (!mounted) {
        return (
            <div
                style={{
                    backgroundColor: '#f0f0f0',
                    minHeight: '100vh',
                }}
            />
        );
    }

    const backgroundImage = currentTheme === 'dark'
        ? "url('/assets/img/bg-dark.jpg')"
        : "url('/assets/img/bg-light.jpg')";

    return (
        <div
            className="relative min-h-screen bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: backgroundImage,
            }}
        >
            {/* Capa preta semi-transparente */}
            <div className={`
                absolute
                inset-0
            `}
                 style={{ backgroundColor: '#17181A', opacity: 0.91 }} />

            {/* Conteúdo da página */}
            <div className="flex items-start justify-center p-20 relative h-screen">
                <FormularioLogin />
            </div>
        </div>
    );
}
