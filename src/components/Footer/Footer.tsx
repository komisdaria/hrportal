import React from "react";
import "./_Footer.scss";
import bem from "bem-cn";
import { Link, useHref } from "react-router-dom";
import gitImg from "./img/github.png";

const cn = bem("footer");

export function Footer() {
  return (
    <footer  className="fixed-bottom">
      <div className={cn("info")}>
        <p className={cn("description")}>CRUD Project Daria Komissarova 2022</p>
        <div>
          <img className={cn("logo-git")} src={gitImg} alt="logo git" />
          <a target="_blank" href="https://github.com/komisdaria?tab=repositories"
          className={cn('link-git')}
          rel="noreferrer">link to github</a>
        </div>
      </div>
    </footer>
  );
}
