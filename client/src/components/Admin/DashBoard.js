import React from "react";

import "./DashBoard.scss";
import AddProject from "./AddProject";
import AddMenu from "./AddMenu";

const Dashboard = (props) => {
    return (
        <div>
            <AddProject />
            <AddMenu />
        </div>
    );
};

export default Dashboard;
