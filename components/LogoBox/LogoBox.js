import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/asset/logo_CC.png";
import styles from "./LogoBox.module.css";

export default function LogoBox() {
    return (
        <div className={styles.logoBox}>
            <Link href='/'>
                <a className={styles.logoBox__link}>
                    <Image
                        className={styles.logoBox__img}
                        src={logo}
                        width='419'
                        height='419'
                        alt='Logo de Charles Cantin'
                    />
                </a>
            </Link>
        </div>
    );
}
