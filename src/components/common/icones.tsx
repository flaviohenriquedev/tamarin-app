// icones.ts
import {MdOutlineAdminPanelSettings} from "react-icons/md";
import {IoIosArrowForward} from "react-icons/io";
import {PiDotsThreeFill} from "react-icons/pi";
import {HiOutlineDotsCircleHorizontal} from "react-icons/hi";
import {LuFile, LuFolderInput, LuFolderTree} from "react-icons/lu";
import {
    Building2,
    CalendarClock,
    Check,
    Columns3Cog,
    Gift,
    GraduationCap,
    HandCoins,
    ListRestart,
    LogOut,
    PinOff,
    ScanEye,
    Settings,
    User,
    UserCog,
    UserRoundSearch
} from "lucide-react";

const tamanhoIcone = 20
export const icones = {
    usuario: <User size={tamanhoIcone}/>,
    folhaPagamento: <HandCoins strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone} />,
    pontoFrequencia: <CalendarClock strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    beneficios: <Gift strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    treinamentos: <GraduationCap strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    recrutamentoSelecao: <UserRoundSearch strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    desligamentos: <PinOff strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    administracao: <MdOutlineAdminPanelSettings size={tamanhoIcone}/>,
    colaboradores: <UserCog strokeWidth={1.25} absoluteStrokeWidth size={tamanhoIcone}/>,
    setaParaDireita: <IoIosArrowForward size={tamanhoIcone}/>,
    tresPontos: <PiDotsThreeFill size={tamanhoIcone}/>,
    tresPontosCirculado: <HiOutlineDotsCircleHorizontal size={tamanhoIcone}/>,
    pasta: <LuFolderInput size={tamanhoIcone}/>,
    arvoreDePastas: <LuFolderTree size={tamanhoIcone}/>,
    arquivo: <LuFile size={tamanhoIcone}/>,
    empresa: <Building2 size={tamanhoIcone}/>,
    configGeral: <Columns3Cog size={tamanhoIcone}/>,
    config: <Settings size={tamanhoIcone} />,
    logout: <LogOut size={tamanhoIcone}/>,
    reload: <ListRestart size={tamanhoIcone}/>,
    check: <Check size={tamanhoIcone} />,
    eyesSquare: <ScanEye size={tamanhoIcone}/>
};
