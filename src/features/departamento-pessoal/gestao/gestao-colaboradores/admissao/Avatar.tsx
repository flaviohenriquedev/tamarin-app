import Image from "next/image";
import {getImagemFromBase64} from "@/utils/utils";
import {useEffect, useState} from "react";
import {FaUser} from "react-icons/fa6";
import {get} from "lodash";

type Props<E> = {
    entidade?: E;
    atributo?: string;
    tamanho?: TamanhoAvatar;
    imagem?: string;
}

type TamanhoAvatar =
    'pequeno' |
    'medio' |
    'grande' |
    'extra-grande'

export function Avatar<E>({entidade, atributo, tamanho = 'medio', imagem}: Props<E>) {

    const [imagemURL, setImagemURL] = useState<string>();
    const [classesTamanho, setClassesTamanho] = useState<string>('');

    useEffect(() => {
        if (tamanho) {
            switch (tamanho) {
                case 'pequeno':
                    setClassesTamanho('w-14 h-14');
                    break;
                case 'medio':
                    setClassesTamanho('w-16 h-16');
                    break;
                case 'grande':
                    setClassesTamanho('w-18 h-18');
                    break;
                case 'extra-grande':
                    setClassesTamanho('w-56 h-56');
                    break;
            }
        }
    }, [tamanho]);

    useEffect(() => {
        if (entidade && atributo) {
            const valorEntidade = get(entidade, atributo);
            if (valorEntidade) {
                setImagemURL(getImagemFromBase64(valorEntidade));
                return;
            }
        }
        if (imagem) {
            setImagemURL(getImagemFromBase64(imagem));
            return;
        }
        setImagemURL(undefined);
    }, [atributo, entidade, imagem]);

    function renderImagem() {
        return imagemURL && imagemURL ? (
            <Image
                width={50}
                height={50}
                src={imagemURL}
                alt="Imagem de perfil"
                className={`w-full h-full object-cover`}
            />
        ) : (
            <div className={`flex items-center justify-center w-full h-full`}><FaUser size={'50%'} /></div>
        )
    }

    return (
        <div className={`avatar`}>
            <div className={`mask bg-base-300 rounded-2xl ${classesTamanho} text-base-100`}>
                {renderImagem()}
            </div>
        </div>
    )
}