// icones.ts
import {
    MdAttachMoney,
    MdCardGiftcard,
    MdExitToApp,
    MdHowToReg,
    MdOutlineAccessTime,
    MdOutlineAdminPanelSettings,
    MdSchool
} from "react-icons/md";
import {BsPersonPlus} from "react-icons/bs";
import {IoIosArrowForward} from "react-icons/io";
import {PiDotsThreeFill} from "react-icons/pi";
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import {LuFile, LuFolderInput, LuFolderTree} from "react-icons/lu";
import {Building2} from "lucide-react";

const tamanhoIcone = 13
export const icones = {
    folhaPagamento: <MdAttachMoney size={tamanhoIcone}/>,
    pontoFrequencia: <MdOutlineAccessTime size={tamanhoIcone}/>,
    beneficios: <MdCardGiftcard size={tamanhoIcone}/>,
    treinamentos: <MdSchool size={tamanhoIcone}/>,
    recrutamentoSelecao: <MdHowToReg size={tamanhoIcone}/>,
    desligamentos: <MdExitToApp size={tamanhoIcone}/>,
    administracao: <MdOutlineAdminPanelSettings size={tamanhoIcone}/>,
    colaboradores: <BsPersonPlus size={tamanhoIcone}/>,
    setaParaDireita: <IoIosArrowForward size={tamanhoIcone}/>,
    tresPontos: <PiDotsThreeFill size={tamanhoIcone}/>,
    tresPontosCirculado: <HiOutlineDotsCircleHorizontal size={tamanhoIcone}/>,
    pasta: <LuFolderInput size={tamanhoIcone}/>,
    arvoreDePastas: <LuFolderTree size={tamanhoIcone}/>,
    arquivo: <LuFile size={tamanhoIcone}/>,
    empresa: <Building2 size={tamanhoIcone}/>,
};
