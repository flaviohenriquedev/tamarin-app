import {Avatar} from "@/components/layouts/info-usuario/avatar";

const nomeUsuario = 'Flavio Henrique Moreira Rosa'
const email = 'flavio.henrique.dev@gmail.com'

export function InfoUsuario() {

    const nomeFormatado = formatarNome(nomeUsuario);

    return (
        <div className={`flex gap-2 items-center`}>
            <div className={'flex justify-center items-end flex-col font-light'}>
                <strong className={`text-[9pt]`}>{nomeFormatado}</strong>
                <span className={`text-[8pt]`}>{email}</span>
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