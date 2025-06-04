'use client'

import {DepartamentoService} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-service";
import {ComponenteListagem} from "@/components/layouts/componente-listagem/componente-listagem";
import {Table} from "@/components/ui/table/table";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {useCallback, useEffect, useState} from "react";
import {
    departamentoColunasListagem
} from "@/features/departamento-pessoal/administracao/departamento/listar/departamento-colunas-listagem";

const departamentoService = new DepartamentoService();

export function DepartamentoListagem() {

    const [listaDepartamento, setListaDepartamento] = useState<Departamento[]>([]);

    useEffect(() => {
        departamentoService.listar().then(result => {
            setListaDepartamento(result);
        });
    }, []);

    const atualizar = useCallback(() => {
        departamentoService.listar().then(result => {
            setListaDepartamento(result);
        });
    }, [])

    return (
        <ComponenteListagem>
            <Table funcaoAtualizarLista={atualizar}
                   lista={listaDepartamento}
                   colunas={departamentoColunasListagem}/>
        </ComponenteListagem>
    )
}