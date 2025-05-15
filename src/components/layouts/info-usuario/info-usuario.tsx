import {Avatar} from "@/components/layouts/info-usuario/avatar";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

export function InfoUsuario() {
    const session = useSession();
    
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    
    useEffect(() => {
        if (session.data?.user.name) {
            setNomeUsuario(formatarNome(session.data.user.name));
        }
        
        if (session.data?.user.email) {
            setEmailUsuario(session.data.user.email)
        }
        
    }, [session.data?.user.email, session.data?.user.name])

    return (
        <div className={`flex gap-2 items-center`}>
            <div className={'flex justify-center items-end flex-col font-light'}>
                <strong className={`text-[9pt]`}>{nomeUsuario}</strong>
                <span className={`text-[8pt]`}>{emailUsuario}</span>
            </div>
            <Avatar />
        </div>
    )
}

function formatarNome(nomeCompleto : string) {
    const partes = nomeCompleto.trim().split(/\s+/);

    if (partes.length === 1) {
        return partes[0];
    }

    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];
    const nomesDoMeio = partes.slice(1, -1);

    const abreviados = nomesDoMeio.map(nome => nome.charAt(0) + '.').join(' ');

    return `${primeiroNome} ${abreviados} ${ultimoNome}`.trim();
}