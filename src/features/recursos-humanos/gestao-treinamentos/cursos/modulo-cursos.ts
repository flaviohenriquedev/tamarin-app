import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'CURSOS'

export const ModuloCursos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'treinamentos-cursos',
            modulo: 'CURSOS',
            title: 'Cursos',
            href: '/rh/treinamentos/cursos'
        }
    }
}