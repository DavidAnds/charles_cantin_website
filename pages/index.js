import Head from "next/head";
import style from "../styles/Home.module.css";
import Link from "next/link"
import LogoBox from "../components/LogoBox/LogoBox";
import FontLink from "../components/FontLink/FontLink";

export default function Home() {
    return (
        <div className={style.home}>
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

            <div className={style.boxTitle}>
                <h1>Charles Cantin</h1>
                <h2>Photographe</h2>
                <nav>
                    <ul>
                        <li>
                            <Link href="/gallery">
                            <a>Galerie</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                              <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/prices">
                              <a>Tarifs</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
