import {LineContentFill} from "@/components/ui/line-content/line-content-fill";
import {Label} from "@/components/ui/label/label";
import {InputString} from "@/components/ui/input/input-string";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {useEffect, useState} from "react";
import {rotasSistema} from "@/features/sistema/rotas";
import {DualListbox} from "@/components/ui/dual-listbox/dual-listbox";

type Props = {
    entidade: Cliente;
}

class ClienteDTO extends Cliente {
    sistemas: Sistema[]
}

class Sistema {
    key: string;
    descricao: string;
}

export function ClienteFormularioCadastro({entidade}: Props) {
    
    const [listaSistema, setListaSistema] = useState<Sistema[]>([]);
    const [entidadeDTO, setEntidadeDTO] = useState<ClienteDTO>(new ClienteDTO());
    
    useEffect(() => {
        const sistemas: Sistema[] = [];
        rotasSistema.map(sistema => {
            sistemas.push({key: sistema.sistema.key, descricao: sistema.sistema.label})
        })
        setListaSistema(sistemas);
    }, [])

    useEffect(() => {
        const clienteDTO = new ClienteDTO();
        clienteDTO.dataCriacao = entidade.dataCriacao;
        clienteDTO.usuarioCriacao = entidade.usuarioCriacao;
        clienteDTO.dataAlteracao = entidade.dataAlteracao;
        clienteDTO.usuarioAlteracao = entidade.usuarioAlteracao;
        clienteDTO.nomeFantasia = entidade.nomeFantasia;
        clienteDTO.razaoSocial = entidade.razaoSocial;
        clienteDTO.cnpj = entidade.cnpj;
        clienteDTO.dataAbertura = entidade.dataAbertura;
        setEntidadeDTO(clienteDTO);
    }, [entidade]);
    
    return (
        <>
            <LineContentFill>
                <Label title={`Nome Fantasia`}>
                    <InputString
                        entidade={entidade}
                        atributo={`nomeFantasia`}/>
                </Label>

                <Label title={`Razão Social`}>
                    <InputString
                        entidade={entidade}
                        atributo={`razaoSocial`}/>
                </Label>
            </LineContentFill>

            <LineContentFill>
                <Label title={`CNPJ`}>
                    <InputString
                        entidade={entidade}
                        atributo={`cnpj`}/>
                </Label>

                <Label title={`Data de Abertura`}>
                    <InputString
                        entidade={entidade}
                        atributo={`dataAbertura`}/>
                </Label>
            </LineContentFill>
            <DualListbox
                listaEntidade={listaSistema}
                fieldLabel={`descricao`}
                listaDestino={entidadeDTO.sistemas} />
        </>
    )
}