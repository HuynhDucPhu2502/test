import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";
import styleClasses from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styleClasses.header}>
        <Link className={styleClasses.logo} href={"/"}>
          <Image src={logoImg} alt="A plate with food on it" priority></Image>
          NextLevel Food
        </Link>

        <nav className={styleClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
