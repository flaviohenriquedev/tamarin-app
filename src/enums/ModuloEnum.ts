import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

export enum ModuloENUM {
    COLABORADOR = "COLABORADOR",
    FOLHA_PAGAMENTO = "FOLHA_PAGAMENTO",
    FOLHA_PAGAMENTO_LANCAMENTOS = "FOLHA_PAGAMENTO_LANCAMENTOS",
    FOLHA_PAGAMENTO_EVENTOS = "FOLHA_PAGAMENTO_EVENTOS",
    REGISTRO_DE_PONTO = "REGISTRO_DE_PONTO"
}

type Funcionalidade = {
    label: string;
};

type ModuloFuncionalidade = {
    funcionalidades: {
        [key: string]: Funcionalidade;
    };
};

export class ModuloFactory {

    private static readonly modulos: ModuloENUM[] = [
        ModuloENUM.COLABORADOR,
        ModuloENUM.FOLHA_PAGAMENTO,
        ModuloENUM.FOLHA_PAGAMENTO_LANCAMENTOS,
        ModuloENUM.FOLHA_PAGAMENTO_EVENTOS,
        ModuloENUM.REGISTRO_DE_PONTO,
    ];

    private static readonly infos = {
        COLABORADOR: {
            label: "Colaborador",
        },
        FOLHA_PAGAMENTO: {
            label: 'Folha de Pagamento'
        },
        FOLHA_PAGAMENTO_LANCAMENTOS: {
            label: 'Lançamentos'
        },
        FOLHA_PAGAMENTO_EVENTOS: {
            label: 'Eventos'
        },
        REGISTRO_DE_PONTO: {
            label: 'Registro de Ponto'
        }
    };

    private static readonly funcionalidadesPadrao = {
        SOMENTE_LEITURA: {
            label: "Somente Leitura",
        },
        MANIPULAR_CADASTRO: {
            label: 'Manipular Cadastro'
        },
    };

    private static readonly funcionalidades: { [k in ModuloENUM]: ModuloFuncionalidade } = {
        COLABORADOR: {
            funcionalidades: {
                ...this.funcionalidadesPadrao,
                CONSULTAR_TESTE: {
                    label: 'Consultar Teste'
                }
            }
        },
        FOLHA_PAGAMENTO: {
            funcionalidades: {
                ...this.funcionalidadesPadrao,
                CONSULTAR_FOLHA_PAGAMENTO: {
                    label: 'Consultar Folha Pagamento'
                }
            }
        },
        FOLHA_PAGAMENTO_LANCAMENTOS: {
            funcionalidades: {
                ...this.funcionalidadesPadrao,
                CONSULTAR_FOLHA_PAGAMENTO: {
                    label: 'Consultar Folha Pagamento'
                }
            }
        },
        FOLHA_PAGAMENTO_EVENTOS: {
            funcionalidades: {
                ...this.funcionalidadesPadrao,
            }
        },
        REGISTRO_DE_PONTO: {
            funcionalidades: {
                ...this.funcionalidadesPadrao,
            }
        }
    }

    static getModulos(): ModuloENUM[] {
        return this.modulos;
    }

    static getSelectItens(): TSelectItem[] {
        return this.modulos.map(item => {
            return {label: this.getLabel(item), value: item};
        });
    }

    static getFuncionalidades(modulo: ModuloENUM) {
        return this.funcionalidades[modulo].funcionalidades;
    }

    static getFuncionalidadesSelectItens(modulo?: ModuloENUM): TSelectItem[] {
        if (modulo) {
            const funcionalidades = this.getFuncionalidades(modulo);
            return Object.entries(funcionalidades).map(([key, value]) => ({
                label: value.label,
                value: key
            }));
        }
        // Caso não passe nenhum módulo, retorna a lista de módulos
        return this.modulos.map(item => {
            return { label: this.getLabel(item), value: item };
        });
    }


    static getLabel(modulo: ModuloENUM): string {
        return modulo ? this.infos[modulo].label : '';
    }

    static getItemByInfo(info: string): TSelectItem | undefined {
        const status = this.modulos.find(item => item === info);

        if (status) {
            return {
                label: this.infos[status].label,
                value: info
            };
        } else {
            return undefined;
        }
    }
}
