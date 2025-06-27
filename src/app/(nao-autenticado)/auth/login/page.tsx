'use client';

import {useEffect, useState} from 'react';
import {ComponenteLogin} from "@/features/_auth/ComponenteLogin";

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

    return (
        <ComponenteLogin/>
    );
}
