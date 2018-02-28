import React from "react"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faAngellist
} from "@fortawesome/fontawesome-free-brands"

import style from "./style.module.scss"

const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__left}>Ria Carmin &copy;{y}</div>
        <div className={style.footer__center}>
          Build with <a href="https://www.gatsbyjs.org/">Gatsby</a> and{` `}
          <a href="https://www.contentful.com/">Contentful</a>.
        </div>
        <div className={style.footer__right}>
          <ul>
            <li className={style.footer__icon}>
              <a
                href="https://github.com/AkimaLunar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className={style.footer__icon}>
              <a
                href="https://www.linkedin.com/in/riacarmin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className={style.footer__icon}>
              <a
                href="https://angel.co/riacarmin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faAngellist} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
