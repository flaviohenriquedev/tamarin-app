'use client'

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button/button";
import {ArrowBigLeft} from "lucide-react";
import {ButtonGroup} from "@/components/ui/button/button-group";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export function ComponenteCadastro({children}: Props) {

    const route = useRouter();

    return (
        <div>
            <div className={`flex items-center w-full justify-between`}>
                <div>
                    <Button onClick={() => route.back()}>
                        <ArrowBigLeft/>
                    </Button>
                </div>

                <ButtonGroup>
                    <Button onClick={() => route.back()}>
                        <ArrowBigLeft/>
                    </Button>

                    <Button onClick={() => route.back()}>
                        <ArrowBigLeft/>
                    </Button>

                    <Button onClick={() => route.back()}>
                        <ArrowBigLeft/>
                    </Button>
                </ButtonGroup>
            </div>
            {children}
        </div>
    )
}