import React from "react";

import "./ProjectHead.scss";

const ProjectHead = (props) => {
    const { name, keywords } = props.project;
    return (
        <div className="project__head">
            <div className="project__name">{name}</div>
            <ul className="project__keywords">
                {keywords.map((keyword, index) => (
                    <li key={`keyword-${index}`}>{keyword}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectHead;
