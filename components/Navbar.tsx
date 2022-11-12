import React from "react";
import { Activelink } from "./Activelink";
import styles from "./Navbar.module.css";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({text,href}) => (
        <Activelink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
