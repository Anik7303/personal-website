import React from "react";

const CreateIcon = (props) => {
    const { icon: Icon, className } = props;
    return (
        <div className={className}>
            <Icon />
        </div>
    );
};

export default CreateIcon;
