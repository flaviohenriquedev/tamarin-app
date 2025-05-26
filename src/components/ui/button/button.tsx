import {ButtonHTMLAttributes, ReactNode} from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonStyle = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    buttonSize?: ButtonSize,
    buttonStyle?: ButtonStyle,
}

export function Button({
                           children,
                           buttonSize = 'xs',
                           buttonStyle = 'primary',
                           type = 'button',
                           onClick,
                       }: Props) {
    return (
        <button className={`
            btn
            btn-soft
            rounded-md
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
                onClick={onClick}>
            {children}
        </button>
    )
}