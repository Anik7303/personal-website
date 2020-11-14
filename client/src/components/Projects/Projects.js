import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./Projects.scss";
import CreateIcon from "../Utility/CreateIcon";
import ProjectHead from "./ProjectHead";
import ProjectDetails from "./ProjectDetails";
import { ChevronRight } from "@material-ui/icons";
import { fetchProjectList } from "../../actions";

const Projects = (props) => {
    const { projects, fetchProjectList } = props;
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchProjectList();
    }, [fetchProjectList]);

    const onSelect = (id) => (id === selected ? setSelected(null) : setSelected(id));

    const renderList = () =>
        projects.length > 0
            ? projects.map((project) => {
                  const { _id: id, name, link } = project;
                  return (
                      <li className="project__item" key={id} onClick={() => onSelect(id)}>
                          <CreateIcon
                              icon={ChevronRight}
                              className={selected === id ? "project__icon active" : "project__icon"}
                          />
                          <ProjectHead project={project} />
                          <div className="project__action">
                              <a
                                  href={link}
                                  title={name}
                                  className="project__link"
                                  onClick={(event) => event.stopPropagation()}
                                  target="_blank"
                                  rel="noreferrer noopener"
                              >
                                  Go
                              </a>
                          </div>
                          <ProjectDetails id={id} show={selected === id} />
                      </li>
                  );
              })
            : null;

    return (
        <section className="section-project">
            <h2 className="heading-2">Projects</h2>
            <ul className="project__list">{renderList()}</ul>
        </section>
    );
};

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps, { fetchProjectList })(Projects);
