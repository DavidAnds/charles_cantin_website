import React from "react";
import FontLink from "../components/FontLink/FontLink";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import Title from "../components/Title/Title";
import styles from "../styles/Contact.module.css";

export default function contact() {
    return (
        <div>
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
        </div>
    );
}
