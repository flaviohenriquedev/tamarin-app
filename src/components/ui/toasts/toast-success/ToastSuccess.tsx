import {toast} from "react-toastify";
import {CheckCheck} from "lucide-react";

type Props = {
    message: string;
}
const ToastSuccess = ({message}: Props) => {
    return (
        <div className={`flex items-center gap-4 h-10 p-2 min-w-52 w-fit text-success text-sm`}>
            <div>
                <CheckCheck/>
            </div>
            <span>{message}</span>
        </div>
    )
}

export function getToastSuccess(message: string) {
    return toast.success(<ToastSuccess message={message} />, {
        icon: false,
        className: () => 'alert alert-success alert-soft'
    });
}