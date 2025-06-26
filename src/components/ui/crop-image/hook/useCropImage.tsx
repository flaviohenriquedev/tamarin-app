import {ChangeEvent, useEffect, useState} from "react";
import {croppedImg} from "@/components/ui/foto-perfil-uploader/ts/functions";
import {blobToBase64} from "@/utils/utils";
import {Area} from "react-easy-crop";
import {get, set} from "lodash";

type Props<E> = {
    entidade?: E;
    atributo?: string;
    onCrop?: (valor: string) => void;
    onClear?: () => void;
}

export function useCropImage<E>({entidade, atributo, onCrop, onClear}: Props<E>) {
    const [imagem64, setImagem64] = useState<string>();

    const [imageSrc, setImageSrc] = useState<string>('');
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

    useEffect(() => {
        return () => {
            if (imageSrc) {
                URL.revokeObjectURL(imageSrc);
            }
        };
    }, [imageSrc]);

    useEffect(() => {
        if (entidade && atributo) {
            const valorEntidade = get(entidade, atributo);
            if (valorEntidade) {
                setImagem64(valorEntidade);
            }
        }
    }, [entidade, atributo]);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (file) {
            const imageDataUrl = URL.createObjectURL(file);
            setImageSrc(imageDataUrl);
        }
    };

    const onCropComplete = (_: Area, croppedPixels: Area) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const croppedImageBlob = await croppedImg(imageSrc, croppedAreaPixels);
        const base64Image = await blobToBase64(croppedImageBlob);
        setImagem64(base64Image)
        if (entidade && atributo) set(entidade, atributo, base64Image);
        if (onCrop) onCrop(base64Image);
    };

    const clearImage = () => {
        setImageSrc('');
        setImagem64(undefined);
        if (onClear) onClear();
    }

    return {imagem64, setImagem64, imageSrc, setImageSrc, handleCrop, onCropComplete, handleFileChange, clearImage}
}