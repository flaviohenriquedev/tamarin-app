'use client'

import {usePathname, useRouter} from "next/navigation";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {Button} from "@/components/ui/button/button";
import {CirclePlus} from "lucide-react";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export function ComponenteListagem({children}: Props) {
    const path = usePathname();
    const route = useRouter();

    return (
        <div>
            <ButtonGroup>
                <Button onClick={() => route.push(`${path}/cadastro`)}>
                    <CirclePlus/> <span>Novo Cadastro</span>
                </Button>
            </ButtonGroup>
            {children}
        </div>
    )
}