type Props = {
    label: string,
}

export function Checkbox({label}: Props) {
    return (
        <div className={`flex items-center h-8`}>
            <label className="label text-sm">
                <input type="checkbox" className="checkbox checkbox-sm"/>
                {label}
            </label>
        </div>
    )
}