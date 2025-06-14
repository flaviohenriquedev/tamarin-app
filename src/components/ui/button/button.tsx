import {ButtonHTMLAttributes, ReactNode} from 'react';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonStyle = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    buttonSize?: ButtonSize,
    buttonStyle?: ButtonStyle,
}

export function Button({
                           children,
                           buttonSize = 'sm',
                           buttonStyle = 'primary',
                           type = 'button',
                           onClick,
                           disabled = false,
                       }: Props) {
    return (
        <button className={`
            btn
            rounded-lg
            cursor-default
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
                onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    )
}