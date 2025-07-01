import {ButtonSize, ButtonStyle} from "@/components/ui/button/Button";
import {ReactElement} from "react";

export type AcaoAdicional = {
    label: string;
    acao: () => void;
    estilo?: ButtonStyle;
    size?: ButtonSize;
    icone?: ReactElement;
}