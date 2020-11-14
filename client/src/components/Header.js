import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import { isEmpty } from "../utils";
import { fetchMenuList, fetchAuthState } from "../actions";

const Header = (props) => {
    const { menuList, isAuth, fetchMenuList, fetchAuthState } = props;

    useEffect(() => {
        fetchMenuList();
    }, [fetchMenuList]);

    useEffect(() => {
        fetchAuthState();
    }, [fetchAuthState]);

    const renderList = () =>
        isEmpty(menuList)
            ? null
            : menuList.map((item, index) => (
                  <li className="nav__item" key={`nav-item-${index}`}>
                      <NavLink exact to={item.link} className="nav__link">
                          {item.name}
                      </NavLink>
                  </li>
              ));
    const renderRestrictedList = () =>
        isAuth
            ? [
                  <li className="nav__item" key={`nav-auth-item-1`}>
                      <NavLink exact to="/dashboard" className="nav__link">
                          Dashboard
                      </NavLink>
                  </li>,
                  <li className="nav__item" key={`nav-auth-item-2`}>
                      <NavLink exact to="/logout" className="nav__link">
                          Logout
                      </NavLink>
                  </li>,
              ]
            : [
                  <li className="nav__item" key={`nav-auth-item-1`}>
                      <NavLink exact to="/login" className="nav__link">
                          Login
                      </NavLink>
                  </li>,
              ];

    return (
        <header className="section-header">
            <nav className="nav">
                <ul className="nav__list">
                    {renderList()}
                    {renderRestrictedList()}
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => ({ menuList: state.menuList, isAuth: state.isAuth });

export default connect(mapStateToProps, { fetchMenuList, fetchAuthState })(Header);
