import React, { useState } from "react";
import FontLink from "../components/FontLink/FontLink";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import styles from "../styles/Prices.module.css";

export default function prices(props) {
    const [tarif, setTarif] = useState(props.data);

    return (
        <>
            <FontLink />
            <Navbar />
            <Title> Tarifs</Title>

            <div className={styles.prices}>
                {tarif.map((item, index) => {
                    return (
                        <div className={index % 2 === 0 ? `${styles.prices__item} ${styles.prices__item_reverse}` : styles.prices__item} key={item.id}>
                            <div className={styles.prices__textBox}>
                                <h2 className={styles.prices__title}>
                                    {item.title}
                                </h2>
                                <p className={styles.prices__text}>
                                    {item.description}
                                </p>
                                <p className={styles.prices__price}>
                                    {item.price}
                                </p>
                            </div>
                            <div className={styles.prices__imgBox}>
                                <img
                                    src={`http://localhost:1337${item.representation.url}`}
                                    alt=''
                                    className={styles.prices__img}
                                />
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
    const prices = await fetch("http://localhost:1337/prices");
    const data = await prices.json();

    return {
        props: {
            data,
        },
    };
}
