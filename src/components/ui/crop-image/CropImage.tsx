import {ChangeEvent, ReactNode, useEffect, useRef, useState} from "react";
import {Pencil} from "lucide-react";
import Modal from "@/components/ui/modal/modal";
import Cropper, {Area} from "react-easy-crop";
import {croppedImg} from "@/components/ui/foto-perfil-uploader/ts/functions";
import {blobToBase64} from "@/utils/utils";
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";

type Props = {
    children: ReactNode;
    onSaveImage?: (base64: string) => void;
}

export function CropImage({children, onSaveImage}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string>('');
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
    const [openModal, setOpenModal] = useState<boolean>(false);

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
            setOpenModal(true);
        }
    };

    const onCropComplete = (_: Area, croppedPixels: Area) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCrop = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const croppedImageBlob = await croppedImg(imageSrc, croppedAreaPixels);
        const base64Image = await blobToBase64(croppedImageBlob);
        if (onSaveImage) onSaveImage(base64Image)
        setOpenModal(false);
    };

    return (
        <>
            <div className="w-fit h-fit relative group">
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleFileChange}
                    className="sr-only"
                />

                {children}

                <div
                    onClick={() => inputRef.current?.click()}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center"
                >
                    <div className={`
                                    cursor-pointer
                                    flex
                                    items-center
                                    justify-center
                                    p-2
                                    m-2
                                    shadow-md
                                    border-2
                                    border-base-100
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-success
                                    text-base-100
                                    opacity-0
                                    translate-y-2
                                    group-hover:opacity-100
                                    group-hover:translate-y-0
                                    transition-all
                                    duration-300
                                    ease-out
                                `}>
                        <Pencil />
                    </div>
                </div>
            </div>

            {imageSrc && (
                <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                    <div
                        className="flex flex-col items-center justify-center gap-4 p-4 bg-base-100 rounded-lg w-[90vw] max-w-[500px] h-[90vh] max-h-[500px]">
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
                        <LineContent>
                            <Button onClick={handleCrop} buttonStyle={`success`} buttonSize={`md`}>
                                Salvar
                            </Button>
                            <Button onClick={() => setOpenModal(false)} buttonStyle={`warning`} buttonSize={`md`}>
                                Cancelar
                            </Button>
                        </LineContent>
                    </div>
                </Modal>
            )}
        </>
    )
}