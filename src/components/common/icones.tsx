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
    Eye,
    Gift,
    GraduationCap,
    HandCoins,
    ListRestart,
    LogOut,
    PinOff,
    Plus,
    Save,
    ScanEye,
    Settings,
    SquarePen,
    TreePalm,
    User,
    UserCog,
    UserLock,
    UserMinus,
    UserPlus,
    UserRoundSearch,
    Users,
    X
} from "lucide-react";

const tamanhoPadrao = 20;

export const icones = {
    usuario: (size = tamanhoPadrao) => <User size={size}/>,
    usuarios: (size = tamanhoPadrao) => <Users size={size}/>,
    usuarioPlus: (size = tamanhoPadrao) => <UserPlus size={size}/>,
    usuarioMinus: (size = tamanhoPadrao) => <UserMinus size={size}/>,
    usuarioBloqueado: (size = tamanhoPadrao) => <UserLock size={size}/>,
    folhaPagamento: (size = tamanhoPadrao) => <HandCoins strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    pontoFrequencia: (size = tamanhoPadrao) => <CalendarClock strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    beneficios: (size = tamanhoPadrao) => <Gift strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    treinamentos: (size = tamanhoPadrao) => <GraduationCap strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    recrutamentoSelecao: (size = tamanhoPadrao) => <UserRoundSearch strokeWidth={1.25} absoluteStrokeWidth
                                                                    size={size}/>,
    desligamentos: (size = tamanhoPadrao) => <PinOff strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    administracao: (size = tamanhoPadrao) => <MdOutlineAdminPanelSettings size={size}/>,
    colaboradores: (size = tamanhoPadrao) => <UserCog strokeWidth={1.25} absoluteStrokeWidth size={size}/>,
    setaParaDireita: (size = tamanhoPadrao) => <IoIosArrowForward size={size}/>,
    tresPontos: (size = tamanhoPadrao) => <PiDotsThreeFill size={size}/>,
    tresPontosCirculado: (size = tamanhoPadrao) => <HiOutlineDotsCircleHorizontal size={size}/>,
    pasta: (size = tamanhoPadrao) => <LuFolderInput size={size}/>,
    arvoreDePastas: (size = tamanhoPadrao) => <LuFolderTree size={size}/>,
    arquivo: (size = tamanhoPadrao) => <LuFile size={size}/>,
    empresa: (size = tamanhoPadrao) => <Building2 size={size}/>,
    configGeral: (size = tamanhoPadrao) => <Columns3Cog size={size}/>,
    config: (size = tamanhoPadrao) => <Settings size={size}/>,
    logout: (size = tamanhoPadrao) => <LogOut size={size}/>,
    reload: (size = tamanhoPadrao) => <ListRestart size={size}/>,
    check: (size = tamanhoPadrao) => <Check size={size}/>,
    eye: (size = tamanhoPadrao) => <Eye size={size}/>,
    eyeSquare: (size = tamanhoPadrao) => <ScanEye size={size}/>,
    save: (size = tamanhoPadrao) => <Save size={size}/>,
    edit: (size = tamanhoPadrao) => <SquarePen size={size}/>,
    x: (size = tamanhoPadrao) => <X size={size}/>,
    plus: (size = tamanhoPadrao) => <Plus size={size}/>,
    tree: (size = tamanhoPadrao) => <TreePalm size={size}/>,
};

