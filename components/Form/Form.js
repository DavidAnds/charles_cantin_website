import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_8P9xJuB9nGZwRH159J6iU");

export default function Form() {
    const [info, setInfo] = useState(false);
    const [infoMessage, setInfoMessage] = useState("Salut, bien reçue");
    const form = useRef();
    const inputs = useRef([]);

    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm("contact_service", "contact_form", form.current).then(
            function () {
                setInfo(true);
                setInfoMessage("Message bien transmis");
                inputs.current.map((item) => {
                    item.target.value = "";
                });
            },
            function (error) {
                setInfo(true);
                setInfoMessage("Une erreur est survenue");
                console.log(error);
            }
        );
    }

    const toggleInfo = () => {
        setInfo(false)
    }

    return (
        <>
            <form ref={form} className={styles.form} onSubmit={handleSubmit}>
                <input type='hidden' name='contact_number' />
                <div className={styles.form__group}>
                    <p className={styles.form__name}>Name</p>
                    <div className={styles.form__grid}>
                        <div className={styles.form__item}>
                            <input
                                className={styles.form__input}
                                onChange={addInputs}
                                type='text'
                                name='user_first_name'
                                id='user_first_name'
                                required
                            />
                            <label
                                className={styles.form__label}
                                htmlFor='#user_first_name'
                            >
                                Prénom
                            </label>
                        </div>
                        <div className={styles.form__item}>
                            <input
                                className={styles.form__input}
                                onChange={addInputs}
                                type='text'
                                name='user_last_name'
                                id='user_last_name'
                                required
                            />
                            <label
                                className={styles.form__label}
                                htmlFor='#user_last_name'
                            >
                                Nom de famille
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles.form__group}>
                    <p className={styles.form__name}>Email</p>
                    <div className={styles.form__item}>
                        <input
                            className={styles.form__input}
                            onChange={addInputs}
                            type='text'
                            name='user_mail'
                            id='user_mail'
                            required
                        />
                        <label
                            className={styles.form__label_invisible}
                            htmlFor='#user_mail'
                        >
                            Prénom
                        </label>
                    </div>
                </div>

                <div className={styles.form__group}>
                    <p className={styles.form__name}>Message</p>
                    <div className={styles.form__item}>
                        <textarea
                            name='message'
                            id=''
                            onChange={addInputs}
                            className={styles.form__textarea}
                            required
                        ></textarea>
                    </div>
                </div>

                <div className={styles.btn}>
                    <button
                        className={styles.btn__item}
                        value='send'
                        type='submit'
                    >
                        Envoyez
                    </button>
                </div>
            </form>
            <div className={info? `${styles.info}` : styles.info__none} onClick={toggleInfo}>
                <div className={styles.info__textBox}>
                    <p className={styles.info__text}>{infoMessage}</p>
                </div>
            </div>
        </>
    );
}
