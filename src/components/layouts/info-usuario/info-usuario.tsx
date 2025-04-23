
const nomeUsuario = 'Flavio Henrique Moreira Rosa'
const email = 'flavio.henrique.dev@gmail.com'

export function InfoUsuario() {

    const nomeFormatado = formatarNome(nomeUsuario);

    return (
        <div className={`flex gap-2 items-center`}>
            <div className={'flex justify-center items-end flex-col font-light'}>
                <span className={`text-sm`}>{nomeFormatado}</span>
                <span className={`text-[8pt]`}>{email}</span>
            </div>
            <div className={`
                    flex
                    items-center
                    justify-center
                    text-white
                    text-xl
                    font-bold
                    w-12
                    h-12
                    rounded-full 
                    border-2 border-[#B8520A]`}>
                FH
            </div>
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