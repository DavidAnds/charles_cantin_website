import React from "react";
import FontLink from "../components/FontLink/FontLink";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import styles from "../styles/Contact.module.css";

export default function contact() {
    return (
        <>
            <Head>
                <title>Charles Cantin - Contact</title>
                <meta charset='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='description'
                    content='Page qui donne accées au informations de Charles Cantin et à un formulaire permettant de le contacter'
                />
                <meta name='keywords' content='photographie, image, contact' />
            </Head>
            <FontLink />
            <Navbar />
            <Title>Contact</Title>

            <div className={styles.contact}>
                <div className={styles.info}>
                    <p className={styles.info__name}>Charles Cantin</p>
                    <p className={styles.info__mail}>
                        CharlesCantinPro@test.fr
                    </p>
                </div>

                <div className={styles.form}>
                    <Form />
                </div>
            </div>

            <Footer />
        </>
    );
}
