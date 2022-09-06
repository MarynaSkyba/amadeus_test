import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className={styles.container} id="home">
        <div>
          <img
            src={require("../../assets/Logos/LogoWhite.svg").default}
            alt="logo"
          />
        </div>

        <ul className={styles.menu}>
          <li className={styles.menu_li} onClick={() => closeMenu()}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.menu_li} onClick={() => closeMenu()}>
            Our Screen
          </li>
          <li className={styles.menu_li} onClick={() => closeMenu()}>
            Schedule
          </li>
          <li className={styles.menu_li} onClick={() => closeMenu()}>
            <a href="#library">Movie Library</a>
          </li>
          <li className={styles.menu_desktop} onClick={() => closeMenu()}>
            <a href="#contact">Location & contact</a>
          </li>
          <li className={styles.menu_tablet} onClick={() => closeMenu()}>
            Gallery
          </li>
        </ul>

        <nav className={styles.navBar}>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li className={styles.menu_navbar} onClick={() => closeMenu()}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.menu_navbar} onClick={() => closeMenu()}>
              Our Screen
            </li>
            <li className={styles.menu_navbar} onClick={() => closeMenu()}>
              Schedule
            </li>
            <li className={styles.menu_navbar} onClick={() => closeMenu()}>
              <a href="#library">Movie Library</a>
            </li>
            <li className={styles.navbar_desktop} onClick={() => closeMenu()}>
              <a href="#contact">Location & contact</a>
            </li>
            <li className={styles.navbar_tablet} onClick={() => closeMenu()}>
              Gallery
            </li>
          </ul>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <img
                src={require("../../assets/Icons/CloseGrey.svg").default}
                alt="menu"
                width="20px"
              />
            ) : (
              <img
                src={require("../../assets/Icons/MenuWhite.svg").default}
                alt="menu"
              />
            )}
          </button>
        </nav>
      </div>
    </>
  );
}


