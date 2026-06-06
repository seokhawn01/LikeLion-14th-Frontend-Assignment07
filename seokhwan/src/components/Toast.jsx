export const Toast = ({message}) => {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full">{message}</div>
    )
}