import styles from "./interests.module.css";
import ItemInterests from "./Item.jsx";
export default function Interests() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Estos son mis intereses:</h3>
            <ul className={styles.containerList}>
                <ItemInterests ItemText={["Programación", "Musica", "Historia", "Videojuegos", "Peliculas", "Series", "Natación", "Animales"]} />
            </ul>
        </div>
    );
}