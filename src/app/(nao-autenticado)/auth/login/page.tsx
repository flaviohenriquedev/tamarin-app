'use client';

import {useEffect, useState} from 'react';
import {FormularioLogin} from "@/features/_auth/formulario-login";

export default function PaginaLogin() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
    //
    // const backgroundImage = currentTheme === 'dark'
    //     ? "url('/assets/img/bg-dark.jpg')"
    //     : "url('/assets/img/bg-light.jpg')";

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-system"
        >
            <FormularioLogin/>
        </div>
    );
}
