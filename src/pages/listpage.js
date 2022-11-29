import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading, Influencer } from "components";

function ListPage() {
    const [engaged, setEngaged] = useState(null);
    const [followers, setFollowers] = useState(null);
    const baseURL = "https://new-api.coco.gl/dashboard/intw";

    useEffect(() => {
        axios
            .get(`${baseURL}/top/engaged`)
            .then(({ data: engaged }) => {
                setEngaged(engaged);
            })
            .catch((e) => {
                console.log(e.response.data);
            });

        axios
            .get(`${baseURL}/top/followers`)
            .then(({ data: followers }) => {
                setFollowers(followers);
            })
            .catch((e) => {
                console.log(e.response.data);
            });
    }, []);

    return engaged && followers ? (
        <div className="list-page">
            <div className="list">
                <h2 className="list-title">Top Engaged</h2>
                <div className="list-body">
                    {engaged.map((user) => (
                        <Influencer key={user.pageId} user={user} />
                    ))}
                </div>
            </div>
            <div className="list">
                <h2 className="list-title">Top Follower</h2>
                <div className="list-body">
                    {followers.map((user) => (
                        <Influencer key={user.pageId} user={user} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className="loading-parent">
            <Loading />
        </div>
    );
}
export default ListPage;
