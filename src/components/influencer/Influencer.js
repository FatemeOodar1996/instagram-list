import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
import { notFound } from "assets/images/index";

function Influencer({ user }) {
    return (
        <Link to={`./detailpage/${user.instagramId}`} relative="path" className="info">
            <div className="info-img">
                <img
                    className={user.parentCategory === null ? "parent-none" : "parent"}
                    src={user.profilePicUrl}
                    alt={user.fullName}
                    onError={(e) => {
                        e.target.src = notFound;
                    }}
                />
            </div>
            <div className="info-main">
                <div className="user-description">
                    <h3 className="username">{user.instagramId}</h3>
                    <h4 className="name">{user.fullName}</h4>
                </div>
                <div className="user-detail">
                    <div
                        className={
                            user.parentCategory === null || user.parentCategory.length === 0 ? "parent-none" : "parent"
                        }>
                        <div className="parent-icon">
                            <img src={user.parentIconUrl} alt="parent icon" />
                        </div>
                        <span className="parent-category">{user.parentCategory}</span>
                    </div>
                    <span
                        className={user.category === null || user.category.length === 0 ? "category-none" : "category"}>
                        {user.category}
                    </span>
                </div>
            </div>

            <FiMoreVertical className="more" />
        </Link>
    );
}
export default Influencer;
