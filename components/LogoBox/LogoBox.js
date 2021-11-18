import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/asset/logo_CC.png";
import style from "./LogoBox.module.css";

export default function LogoBox() {
    return (
        <div className={style.logoBox}>
            <Link href='/'>
                <a>
                    <Image
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
