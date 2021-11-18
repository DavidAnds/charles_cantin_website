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
        <div className={style.container}>
            <LogoBox />

            <button className={style.navBtn} onClick={toggleNav}>
                {
                    toggle? 'x': "="
                }
            </button>

            <nav className={toggle? `${style.nav} ${style.active}`  : style.nav}>
                <ul>
                    <li>
                        <Link href='/galerie'>
                            <a>Galerie</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tarifs'>
                            <a>Tarifs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
