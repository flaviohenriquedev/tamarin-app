import {ButtonStyle} from "@/components/ui/button/button";

export type AcaoAdicional = {
    label: string;
    acao: () => void;
    estilo?: ButtonStyle;
}