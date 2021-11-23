import React from "react";
import styles from "./Form.module.css";

export default function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.form__group}>
                <p className={styles.form__name}>Name</p>
                <div className={styles.form__grid}>
                    <div className={styles.form__item}>
                        <input className={styles.form__input} type='text' name='first-name' id='first-name' />
                        <label className={styles.form__label} htmlFor='first-name'>Prénom</label>
                    </div>
                    <div className={styles.form__item}>
                        <input className={styles.form__input} type='text' name='last-name' id='last-name' />
                        <label className={styles.form__label} htmlFor='last-name'>Nom de famille</label>
                    </div>
                </div>
            </div>

            <div className={styles.form__group}>
                <p className={styles.form__name}>Email</p>
                <div className={styles.form__item}>
                    <input className={styles.form__input} type='text' name='first-name' id='first-name' />
                    <label className={styles.form__label_invisible} htmlFor='first-name'>Prénom</label>
                </div>
            </div>

            <div className={styles.form__group}>
                <p className={styles.form__name}>Message</p>
                <div className={styles.form__item}>
                    <textarea name="" id="" className={styles.form__textarea}></textarea>
                </div>
            </div>

            <div className={styles.btn}>
                <button className={styles.btn__item}>
                    Envoyez
                </button>
            </div>
        </form>
    );
}
