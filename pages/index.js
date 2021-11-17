import Head from "next/head";
import style from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/asset/logo_CC.png";
import Link from "next/link"

export default function Home() {
    return (
        <div className={style.home}>
            <Head>
                <title>Charles Cantin - Accueil</title>
                <meta
                    name='description'
                    content="Page d'accueil du site portfolio du photographe Charles Cantin, "
                />
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:wght@300;400;600&display=swap'
                    rel='stylesheet'
                />
            </Head>

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

            <div className={style.boxTitle}>
                <h1>Charles Cantin</h1>
                <h2>Photographe</h2>
                <nav>
                    <ul>
                        <li>
                            <a>Galerie</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a>Tarifs</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
