import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/dist/client/image";
import FontLink from "../components/FontLink/FontLink";
import imageee from "../public/asset/mariage-1.jpg";
import styles from "../styles/galerie.module.css";

export default function galerie(props) {
    console.log(props.data);
    console.log(props.data[0].pic[0].url);



    
    return (
        <>
            <Head>
                <title>Charles Cantin - Galerie</title>
                <meta
                    name='description'
                    content='La galerie des photographie prise par Charles Cantin'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <FontLink />
            <Navbar />
            <div className={styles.titleBox}>
                <h2>La galerie</h2>
            </div>

            <div className={styles.galleryBox}>
                {props.data.map((item) => {
                    return (
                        <div key={item.id} className={styles.galleryItem}>
                            <div className={styles.imgBox}>
                                {/* <Image
                                src={`http://localhost:1337${item.pic[0].url}`}
                                    alt='Logo de Charles Cantin'
                                /> */}
                                <img src={`http://localhost:1337${item.pic[0].url}`} alt="" />
                            </div>
                            <div className={styles.textBox}>
                                <h3>{item.name}</h3>
                                <p>{item.category.name}</p>
                            </div>
                        </div>
                    );
                })}
                {/* <div className={styles.galeryItem}>
                    <div className={styles.imgBox}>
                        <Image src={imageee} alt='Logo de Charles Cantin' />
                    </div>
                    <div className={styles.textBox}>
                        <h3>Joe et Karina</h3>
                        <p>Mariage</p>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const gallery = await fetch("http://localhost:1337/galleries");
    const data = await gallery.json();

    return {
        props: {
            data,
        },
    };
}
