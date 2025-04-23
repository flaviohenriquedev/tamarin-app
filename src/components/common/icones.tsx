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


export const icones = {
    folhaPagamento: MdAttachMoney,
    pontoFrequencia: MdOutlineAccessTime,
    beneficios: MdCardGiftcard,
    treinamentos: MdSchool,
    recrutamentoSelecao: MdHowToReg,
    desligamentos: MdExitToApp,
    administracao: MdOutlineAdminPanelSettings,
    colaboradores: BsPersonPlus,
    setaParaDireita: IoIosArrowForward,
    tresPontos: PiDotsThreeFill,
    tresPontosCirculado: HiOutlineDotsCircleHorizontal,
    pasta: LuFolderInput,
    arvoreDePastas: LuFolderTree,
    arquivo: LuFile
};
