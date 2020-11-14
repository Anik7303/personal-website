import React, { useState } from "react";
import Axios from "axios";

import "./AddMenu.scss";

const Login = (props) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const onInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "name":
                setName(value);
                break;
            case "link":
                setLink(value);
                break;
            default:
                throw new Error("wrong name used in input field");
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            link,
        };
        Axios.post("/api/menu", data).catch((error) => console.log(error));
    };

    return (
        <div className="add-menu">
            <form className="form" autoComplete="off">
                <h2 className="heading-3 form__heading">Add Menu</h2>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="name"
                        placeholder="Name (e.g. Projects)"
                        value={name}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="link"
                        placeholder="Route (e.g. /projects)"
                        value={link}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form__group">
                    <button className="form__btn" onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
