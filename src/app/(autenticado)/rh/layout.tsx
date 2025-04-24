'use client'

import {ReactNode} from "react";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {LayoutSistema} from "@/components/layouts/layout-sistema/layout-sistema";

export default function LayoutModuloRecursosHumanos({children}: { children: ReactNode }) {
    return (
        <LayoutSistema rotas={rotasRecursosHumanos} >
            {children}
        </LayoutSistema>
    )
}