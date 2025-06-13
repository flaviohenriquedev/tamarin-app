// ProfileImageUploader.tsx
'use client'

import Cropper from 'react-easy-crop';
import {useRef, useState} from 'react';
import {getCroppedImg} from './utils-dev'; // vamos criar isso

export function ProfileImageUploader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<unknown>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageDataUrl = URL.createObjectURL(file);
            setImageSrc(imageDataUrl);
        }
    };

    const onCropComplete = (croppedArea: unknown, croppedPixels: unknown) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
        // Aqui você pode fazer o upload do `croppedImage` para o backend
        console.log('Imagem final:', croppedImage);
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleFileChange}
                hidden
            />
            <button onClick={() => inputRef.current?.click()}>Selecionar Foto</button>

            {imageSrc && (
                <div className="relative w-[300px] h-[300px]">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>
            )}

            <button onClick={handleCrop}>Salvar</button>
        </div>
    );
}
