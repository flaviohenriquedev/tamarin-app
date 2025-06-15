'use client'

import Cropper from 'react-easy-crop';
import {useRef, useState} from 'react';
import {croppedImg} from './ts/crop-image';
import {CirclePlus} from "lucide-react";
import Modal from "@/components/ui/modal/modal";

export function FotoPerfilUploader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageDataUrl = URL.createObjectURL(file);
            setImageSrc(imageDataUrl);
            setOpenModal(true);
        }
    };

    const onCropComplete = (croppedArea: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;
        const croppedImage = await croppedImg(imageSrc, croppedAreaPixels);


        // Aqui você pode fazer o upload do `croppedImage` para o backend
        console.log('Imagem final:', croppedImage);
    };

    function handleSelectImage() {
        inputRef.current?.click();
    }

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleFileChange}
                hidden
            />
            <button type={`button`}
                    className={'flex items-center justify-center w-36 h-52 border border-neutral-200 rounded-lg shadow-sm text-neutral-200'}
                    onClick={handleSelectImage}><CirclePlus size={40}/></button>

            {imageSrc && (
                <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-base-100 rounded-lg w-[90vw] max-w-[500px] h-[90vh] max-h-[500px]">
                        <div className="relative w-full h-full">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                cropShape="round"
                                showGrid={false}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button
                                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={() => setOpenModal(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                onClick={handleCrop}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </Modal>

            )}
        </div>
    );
}
