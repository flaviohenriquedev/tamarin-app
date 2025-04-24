import {Header} from "@/components/layouts/header/header";
import {ReactNode} from "react";

export default function LayoutInicial({children}: { children: ReactNode }) {
    return (
        <main className={`flex`}>
            <div className={`flex flex-col w-full h-full justify-center items-center gap-10`}>
                <Header/>
                {children}
            </div>
        </main>
    )
}