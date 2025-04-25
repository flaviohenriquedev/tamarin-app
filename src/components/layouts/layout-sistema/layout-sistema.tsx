import {Sidemenu} from "@/components/layouts/sidemenu/sidemenu";
import {Header} from "@/components/layouts/header/header";
import {RouteType} from "@/types/RouteType";
import {ReactNode} from "react";

type Props = {
    rotas: RouteType[],
    children: ReactNode
}

export function LayoutSistema({rotas, children}: Props) {
    return (
        <main className={`flex gap-3`}>
            <Sidemenu rotas={rotas}/>
            <div className={`flex flex-col w-full h-screen items-center gap-2`}>
                <Header rotas={rotas}/>
                <div className={`flex flex-col gap-2 w-full`}>
                    {children}
                </div>
            </div>
        </main>
    )
}
