import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsQuestionCircle } from "react-icons/bs";
import { Loading } from "components";
import { notFound } from "assets/images/index";

function DetailPage() {
    const [accountDetail, setAccountDetil] = useState(null);
    const { id } = useParams();

    const baseURL = "https://new-api.coco.gl/dashboard/intw";

    useEffect(() => {
        const getDetail = () => {
            axios.get(`${baseURL}/detail/` + id).then(({ data: accountDetail }) => {
                setAccountDetil(accountDetail);
            });
        };
        getDetail();
    });

    return accountDetail ? (
        <div className="full-information">
            <div className="header">
                <div className="img-container">
                    <img
                        onError={(e) => {
                            e.target.src = notFound;
                        }}
                        src={accountDetail.profilePic}
                        alt={accountDetail.fullName}
                    />
                </div>
                <div className="user-description">
                    <h3 className="username">{accountDetail.instagramId}</h3>
                    <h4 className="name">{accountDetail.fullName}</h4>
                </div>
            </div>
            <div className="body">
                <div className="card">
                    <div className="card-followers">
                        <div className="title">
                            <h2>Followers</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.followerCount}</span>
                    </div>
                    <div className="card-following">
                        <div className="title">
                            <h2>Following</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.followingCount}</span>
                    </div>
                    <div className="card-eng">
                        <div className="title">
                            <h2>Period Eng Rate</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.engagement}</span>
                    </div>
                    <div className="card-total-eng">
                        <div className="title">
                            <h2>Total Eng Rate</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.totalEngagement}</span>
                    </div>
                    <div className="card-post">
                        <div className="card-information">
                            <span className="count">{accountDetail.postPerDay}</span>
                            <div className="title">
                                <h2>Post Per Day</h2>
                                <BsQuestionCircle className="question" />
                            </div>
                        </div>
                        <div className="card-information">
                            <div className="title">
                                <h2>Total Post</h2>
                                <BsQuestionCircle className="question" />
                            </div>
                            <span className="count">{accountDetail.totalPost}</span>
                        </div>
                    </div>
                    <div className="card-likes">
                        <div className="title">
                            <h2>Avg Likes</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.avgLike}</span>
                    </div>
                    <div className="card-comments">
                        <div className="title">
                            <h2>Avg Comments</h2>
                            <BsQuestionCircle className="question" />
                        </div>
                        <span className="count">{accountDetail.avgComment}</span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="loading-parent">
            <Loading />
        </div>
    );
}
export default DetailPage;
