'use client'

import Cropper, {Area} from 'react-easy-crop';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {croppedImg} from './ts/functions';
import Modal from "@/components/ui/modal/modal";
import {blobToBase64, getImagemFromBase64} from "@/utils/utils";
import {set} from "lodash";
import Image from "next/image";
import {FaUser} from "react-icons/fa6";

type Props<E> = {
    entidade?: E;
    atributo?: string;
}

export function FotoPerfilUploader<E>({entidade, atributo}: Props<E>) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [finalImage, setFinalImage] = useState<Blob>();
    const [finalImageUrl, setFinalImageUrl] = useState<string | null>(null);
    const [imageBase64, setImageBase64] = useState<string>('');

    useEffect(() => {
        return () => {
            if (finalImageUrl) {
                URL.revokeObjectURL(finalImageUrl);
            }
        };
    }, [finalImageUrl]);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageDataUrl = URL.createObjectURL(file);
            setImageSrc(imageDataUrl);
            setOpenModal(true);
        }
    };

    const onCropComplete = (_: Area, croppedPixels: Area) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const croppedImageBlob = await croppedImg(imageSrc, croppedAreaPixels);
        const base64Image = await blobToBase64(croppedImageBlob); // se precisar salvar no backend
        const objectUrl = URL.createObjectURL(croppedImageBlob);

        setFinalImage(croppedImageBlob);
        setImageBase64(base64Image);
        setFinalImageUrl(objectUrl); // isso é o que vamos exibir no botão
        if (entidade && atributo) set(entidade, atributo, base64Image);
        setOpenModal(false);
    };

    function handleSelectImage() {
        inputRef.current?.click();
    }


    function renderAvatar() {
        return imageBase64 ? (
            <Image
                width={100}
                height={100}
                src={getImagemFromBase64('')}
                alt="Imagem de perfil"
                className="w-full h-full object-cover"
            />
        ) : (
            <div><FaUser size={100}/>
            </div>
        )
    }

    return (
        <div>
            <label htmlFor="file-upload" className="cursor-pointer">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className="sr-only"
                />

                <div className="avatar">
                    <div className="mask rounded-2xl">
                        {renderAvatar()}
                    </div>
                </div>
            </label>
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
