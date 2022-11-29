import React from "react";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Error500() {
    const navigate = useNavigate();
    return (
        <div className="error-page">
            <div className="main">
                <TbFaceIdError className="error-icon" />
                <h1>Error 500</h1>
                <p>Something Went Wrong</p>
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
export default Error500;