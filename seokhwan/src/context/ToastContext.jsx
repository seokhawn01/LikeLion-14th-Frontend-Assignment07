import { createContext, useRef, useState } from "react";
import { Toast } from "../components/Toast";

export const ToastContext = createContext({});

export const ToastProvider = ({children}) => {
    const [message,setMessage] = useState('');
    const [isOpenToast,setIsOpenToast] = useState(false);
    const toastTimer = useRef(null);

    const showToast = (message) => {
        setIsOpenToast(true);
        setMessage(message);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        const timer = setTimeout(() => {
            setIsOpenToast(false);
            setMessage('');
        },3000);
        toastTimer.current = timer;
    };

    return (
        <ToastContext.Provider value={{ showToast,message,isOpenToast}}>
            {children}
            {isOpenToast && <Toast message={message}/>}
        </ToastContext.Provider>
    );
}