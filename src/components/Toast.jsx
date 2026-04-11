"use client";

const Toast = ({ message, status }) => {
    return (
        <div className={status + " flex center"} id="toast">
            {message}
        </div>
    );
};

export default Toast;
