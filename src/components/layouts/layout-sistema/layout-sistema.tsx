import {Sidemenu} from "@/components/layouts/sidemenu/sidemenu";
import {Header} from "@/components/layouts/header/header";
import {TRoute} from "@/types/TRoute";
import {ReactNode} from "react";

type Props = {
    rotas: TRoute[],
    children: ReactNode
}

export function LayoutSistema({rotas, children}: Props) {
    return (
        <main className={`flex gap-5`}>
            <Sidemenu rotas={rotas}/>
            <div className={`flex flex-col w-full items-center gap-2`}>
                <Header rotas={rotas}/>
                <div className={`flex w-full`}>
                    {children}
                </div>
            </div>
        </main>
    )
}
