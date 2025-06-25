import Image from "next/image";
import {getImagemFromBase64} from "@/utils/utils";
import {useEffect, useState} from "react";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";

type Props = {
    colaborador: Colaborador;
}

export function AvatarColaborador({ colaborador }: Props) {

    const [imageBase64, setImageBase64] = useState<string>();

    useEffect(() => {
        const image = getImagemFromBase64(colaborador.base64);
        if (image) setImageBase64(image);
    }, [colaborador.base64]);

    return (
        <div className="avatar">
            <div className="mask rounded-2xl h-18 w-18">
                {imageBase64 && imageBase64 && (
                    <Image
                        width={50}
                        height={50}
                        src={imageBase64}
                        alt="Imagem de perfil"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        </div>
    )
}