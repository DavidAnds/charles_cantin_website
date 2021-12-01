import React, { useState } from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../components/Navbar/Navbar";
import FontLink from "../components/FontLink/FontLink";
import styles from "../styles/Gallery.module.css";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

export default function gallery(props) {
    const [galeryItems, setGaleryItems] = useState(props.dataGalleries);
    const [toggleFilter, setToggleFilter] = useState(false);

    console.log(props.dataCategories);
    const categories = props.dataCategories;

    const toggleFilterFunc = () => {
        setToggleFilter(!toggleFilter);
    };

    const filterFunc = (categoryName) => {
        let filteredItems = {};

        if (categoryName === "tout") {
            filteredItems = props.dataGalleries;
        } else {
            filteredItems = props.dataGalleries.filter(function (item) {
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

                <meta charset='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='keywords'
                    content='photographie, image, mariage, portrait, couple, mariage, famille'
                />
            </Head>
            <FontLink />
            <Navbar />
            <Title>Galerie</Title>

            <div className={styles.filter}>
                <button
                    className={styles.filter__btn}
                    onClick={toggleFilterFunc}
                >
                    Filter <span className={styles.filter__arrowDown}>v</span>
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

                    {categories.map((item) => {
                        return (
                            <button
                                className={`${styles.filter__btn} ${styles.filter__btn_blue}`}
                                onClick={() => filterFunc(item.name)}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className={styles.gallery}>
                {galeryItems.map((item) => {
                    return (
                        <div key={item.id} className={styles.gallery__item}>
                            <div className={styles.gallery__imgBox}>
                                <img
                                    src={`https://protected-escarpment-88743.herokuapp.com${item.pic[0].url}`}
                                    alt=''
                                    className={styles.gallery__img}
                                />
                            </div>
                            <div className={styles.gallery__textBox}>
                                <h2 className={styles.gallery__title}>
                                    {item.name}
                                </h2>
                                <p className={styles.gallery__text}>
                                    {item.category.name}
                                </p>
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
    const galleries = await fetch(
        "https://protected-escarpment-88743.herokuapp.com/galleries"
    );
    const dataGalleries = await galleries.json();

    const categories = await fetch(
        "https://protected-escarpment-88743.herokuapp.com/categories"
    );
    const dataCategories = await categories.json();

    return {
        props: {
            dataGalleries,
            dataCategories,
        },
    };
}
