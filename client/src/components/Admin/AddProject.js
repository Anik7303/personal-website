import React, { useState } from "react";
import Axios from "axios";

import "./AddProject.scss";

const Login = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [keywords, setKeywords] = useState("");
    const [repoHttps, setRepoHttps] = useState("");
    const [repoSsl, setRepoSsl] = useState("");
    const [author, setAuthor] = useState("");

    const onInputChange = (event) => {
        const { value } = event.target;
        switch (event.target.name) {
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "link":
                setLink(value);
                break;
            case "keywords":
                setKeywords(value);
                break;
            case "repoHttps":
                setRepoHttps(value);
                break;
            case "repoSsl":
                setRepoSsl(value);
                break;
            case "author":
                setAuthor(value);
                break;
            default:
                throw new Error("wrong name used in input field");
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            description,
            link,
            keywords,
            repoHttps,
            repoSsl,
            author,
        };
        Axios.post("/api/projects", data).catch((error) => console.log(error));
    };

    return (
        <div className="add-project">
            <form className="form" autoComplete="off">
                <h2 className="heading-3 form__heading">Add Project</h2>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="keywords"
                        placeholder="Keywords (comma separeted)"
                        value={keywords}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form__group">
                    <textarea
                        className="form__input form__textarea"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={onInputChange}
                        rows={5}
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="link"
                        placeholder="Link"
                        value={link}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="repoHttps"
                        placeholder="Github Repository Link (https)"
                        value={repoHttps}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="repoSsl"
                        placeholder="Github Repository Link (ssl)"
                        value={repoSsl}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        name="author"
                        placeholder="Author Name"
                        value={author}
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
