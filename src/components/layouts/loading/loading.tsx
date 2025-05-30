export function Loading() {
    return (
        <div
            className={`relative flex items-center justify-center w-screen h-screen backdrop-blur-xs bg-base-200/20`}>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
}