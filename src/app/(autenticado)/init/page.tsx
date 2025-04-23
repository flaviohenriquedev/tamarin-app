import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {CardModulo} from "@/components/layouts/card-modulo/card-modulo";
import {Header} from "@/components/layouts/header/header";

export default function PaginaInicial() {

    return (
        <div className={`flex flex-col w-full h-full justify-center items-center gap-10`}>
            <Header/>

            <div className={`flex items-center justify-center w-full h-full gap-4`}>
                <CardModulo icone={<IoSettingsSharp size={45}/>}
                            titulo={`Gerenciamento do Sistema`}
                            descricao={`Acesse as configurações gerais do sistema.`}
                            rota={`/adm`}
                            destaque/>

                <CardModulo icone={<HiUsers size={45}/>}
                            titulo={`Recursos Humanos`}
                            descricao={`Gerencie colaboradores, folhas de pagamento e mais.`}
                            rota={`/rh`}/>
            </div>
        </div>
    )
}