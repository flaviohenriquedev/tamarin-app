import {
    ELLIPSIS_LEFT,
    ELLIPSIS_RIGHT,
    SELECT_TAKE,
    usePaginacao
} from "@/components/ui/table/paginacao/hook/usePaginacao";

interface Props {
    take: number // limit
    skip: number // page
    setSkip?: (n: number) => void
    setTake?: (n: number) => void
    total?: number
    className?: string
}

type Options = {
    value: string
}

const opcoesTake: Options[] = [
    {
        value: '5'
    },
    {
        value: '10'
    },
    {
        value: '15'
    },
    {
        value: '20'
    },
    {
        value: '30'
    },
    {
        value: '40'
    },
    {
        value: '50'
    }
];

export function Paginacao({skip, take, total, className, setSkip, setTake}: Props) {

    const {paginas, isPaginaAtual} = usePaginacao({skip, take, total})

    function handleSkip(value: number) {
        if (value >= 0 && setSkip) return setSkip(value)
    }

    const handleChange = (value: string) => {
        if (setTake) setTake(Number(value));
    };

    return (
        <div className={`sticky bottom-0 left-0 flex items-center justify-center pb-5 w-full mt-4 ${className}`}>
            <div className="join">

                {paginas.map((p, i) => {

                    const isCurrent = isPaginaAtual(p)

                    const isEllipsis = (p === ELLIPSIS_LEFT || p === ELLIPSIS_RIGHT)
                    const isSelectTake = p === SELECT_TAKE

                    if (isEllipsis) {
                        return (
                            <button key={i}
                                    className={`
                                    ${isCurrent ? 'text-primary-content bg-primary/80 hover:bg-primary hover:cursor-pointer' : 'text-base-content bg-base-200 hover:bg-base-300 hover:cursor-pointer'}
                                    flex
                                    items-center
                                    justify-center
                                    px-4
                                    h-8
                                    leading-tight
                                    border
                                    border-base-300 
                                    join-item
                                    btn
                                    btn-sm
                                    btn-disabled
                                    `}>...</button>
                        )
                    }

                    if (isSelectTake) {
                        return (
                            <select key={i}
                                    className={`
                                    flex items-center justify-center px-4 h-8 leading-tight border border-base-300
                                    ${isCurrent ? 'text-primary-content bg-primary/80 hover:bg-primary hover:cursor-pointer' : 'text-base-content bg-base-200 hover:bg-base-300 hover:cursor-pointer'}
                                    ml-2
                                    select
                                    select-sm
                                    w-20
                                    join-item
                                    outline-none`}
                                    onChange={(e) => handleChange(e.target.value)}
                                    defaultValue={take}
                            >
                                {opcoesTake.map((t, i) => (
                                    <option key={i} value={t.value}>{t.value}</option>
                                ))}
                            </select>
                        )
                    }

                    return (
                        <button key={i}
                                onClick={() => handleSkip(((p - 1) * take))}
                                className={`
                                flex items-center justify-center px-4 h-8 leading-tight border border-base-300
                                ${isCurrent ? 'btn-active text-primary-content bg-primary/80 hover:bg-primary hover:cursor-pointer' : 'text-base-content bg-base-200 hover:bg-base-300 hover:cursor-pointer'}
                                join-item
                                btn
                                btn-sm`}>{p}</button>
                    )
                })}
            </div>
        </div>
    )
}
