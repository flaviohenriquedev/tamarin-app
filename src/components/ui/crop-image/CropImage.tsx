import * as React from "react";
import {ChangeEvent, ReactNode, useRef, useState} from "react";
import {CircleDashed, Pencil, SquareDashed, Trash} from "lucide-react";
import Modal from "@/components/ui/modal/Modal";
import Cropper, {Area} from "react-easy-crop";
import {Button} from "@/components/ui/button/Button";
import {LineContent} from "@/components/ui/line-content/line-content";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";

type Props = {
    children: ReactNode;
    imageSrc: string;
    handleCrop: () => void;
    onCropComplete: (_: Area, croppedPixels: Area) => void;
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    clearImage?: () => void;
}

type TShapes = 'rect' | 'round'

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
    const [shape, setShape] = useState<TShapes>('rect')

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
                    className="flex flex-col items-center justify-center gap-4 w-[90vw] max-w-[500px] h-[90vh] max-h-[500px]">
                    <div className="relative w-full h-full">
                        <Cropper
                            classes={{
                                containerClassName: 'rounded-default',
                                cropAreaClassName: 'rounded-lg'}}
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            cropShape={shape}
                            objectFit={`contain`}
                            showGrid={true}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                    <LineContent>
                        <LineContent justifyContent={`start`}>
                            <button
                                className={`
                                    cursor-pointer
                                    p-2
                                    shadow-md
                                    border-1
                                    border-base-300
                                    flex
                                    items-center
                                    justity-center
                                    transition-all
                                    duration-300
                                    active:scale-75
                                    text-neutral-400
                                    ${shape === 'rect' && 'text-primary border-primary/50'}
                                    rounded-lg`}
                                onClick={() => setShape('rect')}><SquareDashed/></button>
                            <button
                                className={`
                                    cursor-pointer
                                    p-2
                                    shadow-md
                                    border-1
                                    border-base-300
                                    flex
                                    items-center
                                    justity-center
                                    transition-all
                                    duration-300
                                    active:scale-75
                                    text-neutral-400
                                    ${shape === 'round' && 'text-primary border-primary/50'}
                                    rounded-lg`}
                                onClick={() => setShape('round')}><CircleDashed/></button>
                        </LineContent>

                        <LineContent justifyContent={`end`}>
                            <Button onClick={cropImage}
                                    buttonStyle={`success`}
                                    buttonClass={`outline`}
                                    buttonSize={`md`}>
                                Salvar
                            </Button>
                            <Button onClick={() => setOpenModal(false)}
                                    buttonStyle={`warning`}
                                    buttonClass={`outline`}
                                    buttonSize={`md`}>
                                Cancelar
                            </Button>
                        </LineContent>
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
                                onClick={() => {
                                    if (clearImage) clearImage();
                                    setOpenModalConfim(false);
                                }}>Sim</Button>
                        <Button buttonSize={`sm`} buttonStyle={`warning`}
                                onClick={() => setOpenModalConfim(false)}>Não</Button>
                    </ButtonGroup>
                </div>
            </Modal>
        </>
    )
}