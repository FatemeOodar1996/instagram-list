import React from "react";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="error-page">
            <div className="main">
                <TbFaceIdError className="error-icon" />
                <h1>ERROR 404</h1>
                <p>Sorry, Page Not Found</p>
                <button
                    onClick={() => {
                        navigate("./");
                    }}>
                    Back To Home
                </button>
            </div>
        </div>
    );
}
export default ErrorPage;
