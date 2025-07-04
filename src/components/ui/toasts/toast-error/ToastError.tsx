import {toast} from "react-toastify";
import {CircleOff} from "lucide-react";

type Props = {
    message: string;
}
const ToastError = ({message}: Props) => {
    return (
        <div className={`flex items-center gap-4 h-10 p-2 min-w-52 w-fit text-error text-sm`}>
            <div>
                <CircleOff />
            </div>
            <span>{message}</span>
        </div>
    )
}

export function getToastError(message: string) {
    return toast.error(<ToastError message={message} />, {
        icon: false,
        className: () => 'alert alert-error alert-soft'
    });
}