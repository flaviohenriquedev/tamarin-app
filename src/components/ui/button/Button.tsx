'use client'

import React, {ButtonHTMLAttributes, ReactElement, ReactNode, useState} from 'react';
import Modal from "@/components/ui/modal/Modal";
import {ButtonGroup} from "@/components/ui/button/ButtonGroup";

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonStyle = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    buttonSize?: ButtonSize,
    buttonStyle?: ButtonStyle,
    buttonClass?: 'outline' | 'soft';
    className?: string;
    onConfirm?: () => void;
    icone?: ReactElement
}

export function Button({
                           children,
                           buttonSize = 'sm',
                           buttonStyle = 'primary',
                           buttonClass,
                           className,
                           type = 'button',
                           onClick,
                           onConfirm,
                           disabled = false,
                           icone
                       }: Props) {

    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleClick(v: React.MouseEvent<HTMLButtonElement>) {

        if (onConfirm && onClick) {
            throw new Error("Não é permitido usar onConfirm e onClick juntos, apenas um dos dois.")
        }

        if (onConfirm) {
            setOpenModal(true);
        } else if (onClick) {
            onClick(v)
        }
    }

    function handleConfirm() {
        if (onConfirm) onConfirm();
        setOpenModal(false);
    }

    return (
        <>
            <button className={`
            btn
            rounded-lg
            ${buttonClass && buttonClass === 'soft' ? 'btn-soft' : buttonClass === 'outline' ? 'btn-outline' : ''}
            ${className}
            ${buttonSize === 'xs' ? 'btn-xs'
                : buttonSize === 'sm' ? 'btn-sm'
                    : buttonSize === 'md' ? 'btn-md'
                        : buttonSize === 'lg' ? 'btn-lg'
                            : buttonSize === 'xl' ? 'btn-xl'
                                : ''}
            ${buttonStyle === 'neutral' ? 'btn-neutral'
                : buttonStyle === 'primary' ? 'btn-primary'
                    : buttonStyle === 'secondary' ? 'btn-secondary'
                        : buttonStyle === 'accent' ? 'btn-accent'
                            : buttonStyle === 'info' ? 'btn-info'
                                : buttonStyle === 'success' ? 'btn-success'
                                    : buttonStyle === 'warning' ? 'btn-warning'
                                        : buttonStyle === 'error' ? 'btn-error'
                                            : ''}
                                `
            }
                    type={type}
                    onClick={(e) => handleClick(e)}
                    disabled={disabled}>
                <div className={`flex gap-2 items-center`}>
                    {icone && (
                        <span>{icone}</span>
                    )}
                    {children}
                </div>

            </button>

            <Modal
                isOpen={openModal}
                setIsOpen={setOpenModal}
                title={`Atenção`}>
                <div className={`p-4 flex flex-col gap-2 text-base-content`}>
                    <span>Tem certeza que deseja realizar esta ação?</span>
                    <ButtonGroup>
                        <button className="btn btn-success btn-sm" onClick={handleConfirm}>Sim</button>
                        <button className="btn btn-warning btn-sm" onClick={() => setOpenModal(false)}>Não</button>
                    </ButtonGroup>
                </div>
            </Modal>
        </>
    )
}