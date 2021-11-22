import React, { useState } from "react";
import Link from "next/link";
import LogoBox from "../LogoBox/LogoBox";
import style from "./Navbar.module.css";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle)
    }

    return (
        <div className={style.navbar}>
            <LogoBox />

            <button className={style.navbar__btn} onClick={toggleNav}>
                {
                    toggle? 'x': "="
                }
            </button>

            <nav className={toggle? `${style.navbar__nav} ${style.navbar__nav_active}`  : style.navbar__nav}>
                <ul className={style.nav__list}>
                    <li className={nav__item}>
                        <Link href='/gallery'>
                            <a className={nav__link}>Galerie</a>
                        </Link>
                    </li>
                    <li className={nav__item}>
                        <Link href='/contact'>
                            <a className={nav__link}>Contact</a>
                        </Link>
                    </li>
                    <li className={nav__item}>
                        <Link href='/prices'>
                            <a className={nav__link}>Tarifs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
