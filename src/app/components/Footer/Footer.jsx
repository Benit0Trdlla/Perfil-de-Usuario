import styles from "./footer.module.css";
export default function Footer() {
    return (
        <>
            <hr className={styles.separator} />
            <h5 className={styles.center}>Creado por: <a href="https://github.com/Benit0Trdlla">Benito Tridella Dolce</a></h5>
            <h6 className={styles.center}>Copyright 2024</h6>
        </>
    );
}