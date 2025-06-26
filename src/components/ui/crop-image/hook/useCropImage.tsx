import {ChangeEvent, useEffect, useState} from "react";
import {croppedImg} from "@/components/ui/foto-perfil-uploader/ts/functions";
import {blobToBase64} from "@/utils/utils";
import {Area} from "react-easy-crop";

type Props = {
    onCrop?: (valor: string) => void,
    onClear?: () => void,
}

export function useCropImage({onCrop, onClear}: Props) {
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
        if (onCrop) onCrop(base64Image);
    };

    const clearImage = () => {
        console.log(`tamo aqui`)
        setImageSrc('');
        setImagem64(undefined);
        if (onClear) onClear();
    }

    return {imagem64, setImagem64, imageSrc, setImageSrc, handleCrop, onCropComplete, handleFileChange, clearImage}
}