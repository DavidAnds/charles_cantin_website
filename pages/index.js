
import Head from "next/head";
import style from "../styles/Home.module.css";
import Link from "next/link"
import LogoBox from "../components/LogoBox/LogoBox";
import FontLink from "../components/FontLink/FontLink";

export default function Home(props) {
    
    const background = `https://protected-escarpment-88743.herokuapp.com${props.data.background.url}`
    
    return (
        <div className={style.home} style={{backgroundImage: 'url' + '(' + background + ')'}} >
            <FontLink/>
            <Head>
                <title>Charles Cantin - Accueil</title>
                <meta
                    name='description'
                    content="Page d'accueil du site portfolio du photographe Charles Cantin, "
                />
                <meta charset='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta name="keywords" content="photographie, image, contact"/>
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
    const bg = await fetch("https://protected-escarpment-88743.herokuapp.com/home-background");
    const data = await bg.json();

    

    return {
        props: {
            data,
        },
    };
}
