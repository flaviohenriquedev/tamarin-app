import {Sidemenu} from "@/components/layouts/sidemenu/sidemenu";
import {Header} from "@/components/layouts/header/header";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {RouteType} from "@/types/RouteType";
import {ReactNode} from "react";

type Props = {
    rotas: RouteType[],
    children: ReactNode
}

export function LayoutSistema({rotas, children}: Props) {
    return (
        <main className={`flex`}>
            <Sidemenu rotas={rotas}/>
            <div className={`flex flex-col w-full h-screen items-center gap-10`}>
                <Header/>
                <div className={`w-full`}>
                    <Breadcrumb rotas={rotas}/>
                    {children}
                </div>
            </div>
        </main>
    )
}
