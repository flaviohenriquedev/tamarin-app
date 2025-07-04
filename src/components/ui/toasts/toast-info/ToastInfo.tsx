import {toast} from "react-toastify";
import {BellRing} from "lucide-react";

type Props = {
    message: string;
}
const ToastInfo = ({message}: Props) => {
    return (
        <div className={`flex items-center gap-4 h-10 p-2 min-w-52 w-fit text-info text-sm`}>
            <div>
                <BellRing/>
            </div>
            <span>{message}</span>
        </div>
    )
}

export function getToastInfo(message: string) {
    return toast.info(<ToastInfo message={message}/>, {
        icon: false,
        className: () => 'alert alert-info alert-soft'
    });
}