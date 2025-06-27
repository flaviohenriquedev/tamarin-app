'use client'

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button/Button";
import {ArrowBigLeft} from "lucide-react";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";
import {ReactNode} from "react";
import {Form} from "@/components/ui/form/form";

type Props = {
    children: ReactNode;
    funcaoSalvar: () => void
}

export function ComponenteCadastro({children, funcaoSalvar}: Props) {

    const route = useRouter();

    function voltar() {
        route.back()
    }

    return (
        <Form onSubmit={funcaoSalvar}>
            <div className={`flex items-center w-full justify-between`}>
                <div>
                    <Button onClick={voltar}>
                        <ArrowBigLeft/>
                    </Button>
                </div>

                <ButtonGroup>

                    <Button type={`submit`}
                            onClick={voltar}
                            buttonStyle={`success`}>
                        Cancelar
                    </Button>

                    <Button type={`submit`}
                            buttonStyle={`success`}>
                        Salvar
                    </Button>
                </ButtonGroup>
            </div>
            {children}
        </Form>
    )
}