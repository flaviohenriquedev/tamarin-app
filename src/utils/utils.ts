export function openModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).showModal()
}

export function closeModal(idModal: string) {
    (document.getElementById(idModal) as HTMLDialogElement).close()
}