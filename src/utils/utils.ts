import {format, isValid, parse} from "date-fns";

export function openModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).showModal()
}

export function closeModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).close()
}

export const formatarCPF = (cpf: string) => {
    return lPad(cpf, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};


const lPad = (str: string, length: number) => {
    const resto: number = length - String(str).length;
    return "0".repeat(Number(resto > 0 ? resto : "0")) + str;
};

export function mascararCNPJ(valor: string) {
    if (valor) {
        const somenteNumeros = valor.replace(/\D/g, "");
        return somenteNumeros
            .replace(/^(\d{2})(\d)/, "$1.$2")
            .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
            .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
    }
    return '';
}

export function mascararCPF(valor: string): string {
    if (valor) {
        const somenteNumeros = valor.replace(/\D/g, "");
        return somenteNumeros
            .replace(/^(\d{3})(\d)/, "$1.$2")
            .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    }
    return '';
}

export function limparCNPJ(valor: string) {
    if (valor) {
        return valor.replace(/\D/g, "");
    }
    return null;
}

const FORMAT_BR = "dd/MM/yyyy";
export function parseDateBR(value: string): Date | undefined {
    const parsed = parse(value, FORMAT_BR, new Date());
    return isValid(parsed) ? parsed : undefined;
}

export function formatDateBR(date: Date): string {
    return format(date, FORMAT_BR);
}

export function getPrimeiroNome(nomeCompleto: string) {
    return nomeCompleto.trim().split(/\s+/)[0];
}
