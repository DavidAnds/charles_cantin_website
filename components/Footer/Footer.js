import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import insta from "../../public/asset/icon_instagram.png";
import fb from "../../public/asset/icon_facebook.png"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__iconBox}>
                <div className={styles.footer__instaBox}>
                    <Link href='https://www.instagram.com/'>
                        <Image
                            src={insta}
                            width='512'
                            height='512'
                            className={styles.footer__insta}
                        />
                    </Link>
                </div>
                <div className={styles.footer__fbBox}>
                    <Link href='https://www.facebook.com/'>
                        <Image
                            src={fb}
                            width='32'
                            height='32'
                            className={styles.footer__fb}
                        />
                    </Link>
                </div>
            </div>
            <p className={styles.footer__text}>
                © Charles Cantin 2021 Site by David ANDRIASON
            </p>
        </div>
    );
}
