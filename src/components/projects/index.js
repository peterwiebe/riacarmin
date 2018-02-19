import React from "react";
import style from "./style.module.scss";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import Square from "./square";

const Card = ({ project }) => (
  <a className={style.projects__card} target="_blank" href="https://github.com/">
    <article>
      <FontAwesomeIcon icon={faCoffee} className={style.projects__card__icon} />
      <h3 className={style.projects__card__title}>{project.node.title}</h3>
      {project.node.cover
        ? (<img src={`https://${project.node.cover.resize.src}`} className={style.projects__card__image} />)
        : (<p>{project.node.description.description}</p>)
      }
    </article>
  </a>
)

const Projects = ({ data }) => (
  <section className={style.projects}>
    <div className={style.projects__inner}>
      <div className={style.projects__grid}>
        {data.projects.map(project => (<Card key={project.node.id} project={project} />))}
      </div>

      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  </section >
);

export default Projects;
