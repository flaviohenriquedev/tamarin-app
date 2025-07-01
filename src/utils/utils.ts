import {isValid, parse} from "date-fns";
import {formatInTimeZone} from "date-fns-tz";

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
    if (date && dataValida(new Date(date))) {
        return formatInTimeZone(date, 'America/Sao_Paulo', 'dd/MM/yyyy');
    }
    return ''
}

export function getPrimeiroNome(nomeCompleto: string) {
    return nomeCompleto.trim().split(/\s+/)[0];
}

export function getIniciaisNome(nomeCompleto: string): string {
    const partes = nomeCompleto.trim().split(/\s+/);

    if (partes.length >= 2) {
        return `${partes[0][0].toUpperCase()}${partes[1][0].toUpperCase()}`;
    }

    return partes[0].substring(0, 2).toUpperCase();
}

export function dataValida(date: Date): boolean {
    return !isNaN(date.getTime());
}

export function aplicarMascaraData(valor: string): string {
    const numeros = valor.replace(/\D/g, '');

    let resultado = '';
    if (numeros.length <= 2) {
        resultado = numeros;
    } else if (numeros.length <= 4) {
        resultado = `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
    } else {
        resultado = `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}/${numeros.slice(4, 8)}`;
    }

    return resultado;
}

export function isTrue(v: string): boolean {
    return v === "true";
}

export function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject('Erro ao converter imagem para base64.');
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export function base64ToBlob(base64: string): Blob {
    const [metadata, data] = base64.split(',');
    const mime = metadata.match(/:(.*?);/)?.[1] || '';
    const byteCharacters = atob(data);
    const byteNumbers = Array.from(byteCharacters, char => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: mime });
}

export function getImagemFromBase64(base: string) {
    if (base && base.length > 0) {
        const blob = base64ToBlob(base);
        return URL.createObjectURL(blob);
    }
    return ''
}

export function getBooleanFromString(v: string | null): boolean {
    return v === 'true';
}