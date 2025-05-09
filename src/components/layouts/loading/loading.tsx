export function Loading() {
    return (
        <div
            className={`flex items-center justify-center w-full h-full backdrop-blur-xs bg-base-200/20`}>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
}