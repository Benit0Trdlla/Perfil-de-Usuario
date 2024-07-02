import styles from "./interests.module.css";

export default function ItemInterests({ ItemText }) {
    return (
        <>
            {
                ItemText.map((item, index) => (
                    <li className={styles.item} key={index}>
                        {item}
                    </li>
                ))
            }
        </>
    );
}