import React, { useState } from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../components/Navbar/Navbar";
import FontLink from "../components/FontLink/FontLink";
import styles from "../styles/Gallery.module.css";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

export default function gallery(props) {
    const [galeryItems, setGaleryItems] = useState(props.data);
    const [toggleFilter, setToggleFilter] = useState(false);

    const toggleFilterFunc = () => {
        setToggleFilter(!toggleFilter);
    };

    const filterFunc = (categoryName) => {
        let filteredItems = {};

        if (categoryName === "tout") {
            filteredItems = props.data;
        } else {
            filteredItems = props.data.filter(function (item) {
                return item.category.name.toLowerCase() === categoryName;
            });
        }

        setGaleryItems(filteredItems);
        setToggleFilter(!toggleFilter);
    };

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
            <Title>Galerie</Title>

            <div className={styles.filter}>
                <button
                    className={styles.filter__btn}
                    onClick={toggleFilterFunc}
                >
                    Filter v
                </button>
                <div
                    className={
                        toggleFilter
                            ? `${styles.filter__dropdown} ${styles.filter__dropdown_active}`
                            : styles.filter__dropdown
                    }
                >
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("tout")}
                    >
                        tout
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("bébé")}
                    >
                        bébé
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("couple")}
                    >
                        couple
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("famille")}
                    >
                        famille
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("grossesse")}
                    >
                        grossesse
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("mariage")}
                    >
                        mariage
                    </button>
                    <button
                        className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                        onClick={() => filterFunc("portrait")}
                    >
                        portrait
                    </button>
                </div>
            </div>

            <div className={styles.gallery}>
                {galeryItems.map((item) => {
                    return (
                        <div key={item.id} className={styles.gallery__item}>
                            <div className={styles.gallery__imgBox}>
                                <img
                                    src={`http://localhost:1337${item.pic[0].url}`}
                                    alt=''
                                    className={styles.gallery__img}
                                />
                            </div>
                            <div className={styles.gallery__textBox}>
                                <h2 className={styles.gallery__title}>{item.name}</h2>
                                <p className={styles.gallery__text}>{item.category.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Footer />
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
