import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <Image
                        src="/UserPhoto.png"
                        alt="UserPhoto"
                        className={styles.logoUser}
                        width={100}
                        height={24}
                        priority
                    />
                    <p>
                        Benito Tridella Dolce
                    </p>
                    <div className={styles.subContainer}>
                        <Image
                            src="/DarkMode.png"
                            alt="DarkMode"
                            className={styles.logoDarkmode}
                            width={100}
                            height={24}
                            priority
                        />
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </div>
            </div>
            <hr className={styles.separator}/>
        </>
    );
}