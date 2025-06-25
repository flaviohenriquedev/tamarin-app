import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type Props = {
    values: TSelectItem[]
}

export function RadioGroup({values}: Props) {
    return (
        <div className={`flex flex-col gap-1 bg-base-100 p-1 rounded-sm`}>
            {values.map((item: TSelectItem) => {
                return (
                    <div key={item.value as string}
                        className={`flex bg-base-200 items-center p-2 gap-2 rounded-sm`}>
                        <input key={item.value as string} type="radio" name="radio-8" className="cursor-default radio radio-xs" />
                        <label>{item.label}</label>
                    </div>
                )
            })}
        </div>
    )
}