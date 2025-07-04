import {toast} from "react-toastify";
import {TriangleAlert} from "lucide-react";

type Props = {
    message: string;
}
const ToastAlert = ({message}: Props) => {
    return (
        <div className={`flex items-center gap-4 h-10 p-2 min-w-52 w-fit text-warning text-sm`}>
            <div>
                <TriangleAlert/>
            </div>
            <span>{message}</span>
        </div>
    )
}

export function getToastAlert(message: string) {
    return toast.warning(<ToastAlert message={message}/>, {
        icon: false,
        className: () => 'alert alert-warning alert-soft'
    });
}