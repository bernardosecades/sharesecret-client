import React from "react";

const ErrorSecret = ({ errorMessage }) => {
    return (
        <div className="error">
            <p>{errorMessage}</p>
        </div>
    )
};

export default ErrorSecret
