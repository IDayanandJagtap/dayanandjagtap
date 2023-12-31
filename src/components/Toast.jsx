"use-client";
import { useEffect } from "react";

const Toast = ({ message, status }) => {
    useEffect(() => {
        const toast = document.getElementById("toast");
        toast.style.transform = "translate(-50%, 0)";

        setTimeout(() => {
            toast.style.transform = "translate(-50%, -10rem)";
        }, 3000);
    });

    return (
        <div className={status + " flex center"} id="toast">
            {message}
        </div>
    );
};

export default Toast;
