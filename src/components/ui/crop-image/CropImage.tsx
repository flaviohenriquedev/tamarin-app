import {ChangeEvent, ReactNode, useRef, useState} from "react";
import {Pencil, Trash} from "lucide-react";
import Modal from "@/components/ui/modal/modal";
import Cropper, {Area} from "react-easy-crop";
import {Button} from "@/components/ui/button/button";
import {LineContent} from "@/components/ui/line-content/line-content";
import {ButtonGroup} from "@/components/ui/button/button-group";

type Props = {
    children: ReactNode;
    imageSrc: string;
    handleCrop: () => void;
    onCropComplete: (_: Area, croppedPixels: Area) => void;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    clearImage: () => void;
}

export function CropImage({
                              children,
                              imageSrc,
                              handleCrop,
                              onCropComplete,
                              handleFileChange,
                              clearImage
                          }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalConfim, setOpenModalConfim] = useState<boolean>(false);

    function changeFile(e: ChangeEvent<HTMLInputElement>) {
        void handleFileChange(e);
        setOpenModal(true);
    }

    function cropImage() {
        handleCrop();
        setOpenModal(false);
    }

    function handleClearImage() {
        setOpenModalConfim(true);
    }

    const iconButtonBase = `
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
            text-base-100
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
            ease-out
        `;

    return (
        <>
            <div className="w-fit h-fit relative group">
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={changeFile}
                    className="sr-only"
                />

                {children}

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center">
                    <div
                        onClick={() => inputRef.current?.click()}
                        className={`${iconButtonBase} bg-success`}>
                        <Pencil/>
                    </div>

                    <div
                        onClick={handleClearImage}
                        className={`${iconButtonBase} bg-warning`}>
                        <Trash/>
                    </div>
                </div>
            </div>

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
                        <Button onClick={cropImage}
                                buttonStyle={`success`}
                                buttonSize={`md`}>
                            Salvar
                        </Button>
                        <Button onClick={() => setOpenModal(false)}
                                buttonStyle={`warning`}
                                buttonSize={`md`}>
                            Cancelar
                        </Button>
                    </LineContent>
                </div>
            </Modal>

            <Modal
                isOpen={openModalConfim}
                setIsOpen={setOpenModalConfim}
                title={`Atenção`}>
                <div className={`p-4 flex flex-col gap-2`}>
                    <span>Tem certeza que deseja remover?</span>
                    <ButtonGroup>
                        <Button buttonSize={`sm`} buttonStyle={`success`}
                                onClick={clearImage}>Sim</Button>
                        <Button buttonSize={`sm`} buttonStyle={`warning`}
                                onClick={() => setOpenModalConfim(false)}>Não</Button>
                    </ButtonGroup>
                </div>
            </Modal>
        </>
    )
}