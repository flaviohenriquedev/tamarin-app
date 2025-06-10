import {signOut} from "next-auth/react";
import Cookies from "js-cookie";

export async function logout() {
    await signOut({redirect: false}).then(() => {
        localStorage.removeItem("sistemaSelecionado")
        Cookies.remove("empresa_id")
    })
}