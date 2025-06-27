import {ButtonStyle} from "@/components/ui/button/Button";

export type AcaoAdicional = {
    label: string;
    acao: () => void;
    estilo?: ButtonStyle;
}