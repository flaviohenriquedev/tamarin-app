'use client'

import {usePathname, useRouter} from "next/navigation";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {Button} from "@/components/ui/button/Button";
import {Plus} from "lucide-react";
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
                    <Plus /> <span>Novo Cadastro</span>
                </Button>
            </ButtonGroup>
            {children}
        </div>
    )
}