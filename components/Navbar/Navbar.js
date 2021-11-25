import React, { useState } from "react";
import Link from "next/link";
import close from "../../public/asset/icon_close.png";
import hamburger from "../../public/asset/icon_hamburger.png";
import Image from "next/dist/client/image";
import LogoBox from "../LogoBox/LogoBox";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
    };

    return (
        <div className={styles.navbar}>
            <LogoBox />

            <button className={styles.navbar__btn} onClick={toggleNav}>
                {toggle ? (
                    <div className={styles.navbar__closeIconBox}>
                        <Image
                            src={close}
                            width='32'
                            height='32'
                            className={styles.navbar__closeIcon}
                        />
                    </div>
                ) : (
                    <div className={styles.navbar__hamIconBox}>
                        <Image
                            src={hamburger}
                            width='32'
                            height='32'
                            className={styles.navbar__hamIcon}
                        />
                    </div>
                )}
            </button>

            <nav
                className={
                    toggle
                        ? `${styles.navbar__nav} ${styles.navbar__nav_active}`
                        : styles.navbar__nav
                }
            >
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link href='/gallery'>
                            <a className={styles.nav__link}>Galerie</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='/contact'>
                            <a className={styles.nav__link}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href='/prices'>
                            <a className={styles.nav__link}>Tarifs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
