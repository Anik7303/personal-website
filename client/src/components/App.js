import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects/Projects";
import Login from "./Admin/Login";
import Dashboard from "./Admin/DashBoard";
import { handleLogout } from "../actions";

const App = (props) => {
    const { isAuth } = props;

    const routes = (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
        </Switch>
    );
    const authRoutes = (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" render={() => logOut()} />
            <Redirect to="/" />
        </Switch>
    );

    const logOut = () => {
        props.handleLogout();
    };

    return (
        <div className="container">
            <Header />
            <main className="section-main">{isAuth ? authRoutes : routes}</main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({ isAuth: state.isAuth });

export default connect(mapStateToProps, { handleLogout })(App);
