import { useState } from "react";
import Head from "next/head";
import style from "../styles/Home.module.css";
import Link from "next/link"
import LogoBox from "../components/LogoBox/LogoBox";
import FontLink from "../components/FontLink/FontLink";

export default function Home(props) {
    
    const [background, setBackground] = useState(`http://localhost:1337${props.data.background.url}`)
    
    return (
        <div className={style.home} style={{backgroundImage: 'url' + '(' + background + ')'}} >
            <FontLink/>
            <Head>
                <title>Charles Cantin - Accueil</title>
                <meta
                    name='description'
                    content="Page d'accueil du site portfolio du photographe Charles Cantin, "
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

           <LogoBox />

            <div className={style.home__boxTitle}>
                <h1 className={style.home__title}>Charles Cantin</h1>
                <h2 className={style.home__subTitle}>Photographe</h2>
                <nav className={style.home__nav}>
                    <ul className={style.nav__list}>
                        <li className={style.nav__item}>
                            <Link href="/gallery">
                            <a className={style.nav__link}>Galerie</a>
                            </Link>
                        </li>
                        <li className={style.nav__item}>
                            <Link href="/contact">
                              <a className={style.nav__link}>Contact</a>
                            </Link>
                        </li>
                        <li className={style.nav__item}>
                            <Link href="/prices">
                              <a className={style.nav__link}>Tarifs</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const gallery = await fetch("http://localhost:1337/home-background");
    const data = await gallery.json();

    return {
        props: {
            data,
        },
    };
}
