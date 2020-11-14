import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProjectDetails.scss";

const ProjectDetails = (props) => {
    const { id, show } = props;
    const [data, setData] = useState({});
    const [selected, setSelected] = useState("https");

    useEffect(() => {
        if (id && show) {
            try {
                (async () => {
                    const response = await axios.get(`/api/projects/${id}`);
                    setData(response.data);
                })();
            } catch (error) {
                console.log({ error });
            }
        }
    }, [id, show]);

    return (
        <div
            className={show ? "project__details active" : "project__details"}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="project__repo">
                <div className="project__repo-names">
                    <span onClick={() => setSelected("https")}>https</span>
                    <span onClick={() => setSelected("ssl")}>ssl</span>
                </div>
                <div className="project__repo-link">
                    {data.githubRepo && data.githubRepo[selected]}
                </div>
            </div>
            {data.description && <div className="project__description">{data.description}</div>}
        </div>
    );
};

export default ProjectDetails;
