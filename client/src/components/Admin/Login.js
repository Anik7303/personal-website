import React, { useState } from "react";
import { connect } from "react-redux";

import "./Login.scss";
import { handleLogin } from "../../actions";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                throw new Error("wrong name used in input field");
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        props.handleLogin(email, password);
    };

    return (
        <form className="form" autoComplete="off">
            <div className="form__group">
                <input
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="form__group">
                <input
                    className="form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="form__action">
                <button className="form__btn" onClick={onSubmit}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default connect(null, { handleLogin })(Login);
