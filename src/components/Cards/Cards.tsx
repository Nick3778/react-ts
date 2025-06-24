import styles from "./Cards.module.scss";
import type { CardProps } from "../Services/Services";

export function Cards({
    title,
    description,
    imageUrl,
    link,
    alt,
    backgroundColor,
}: CardProps) {
    return (
        <div className={styles.card} style={{ backgroundColor }}>
            <div className={styles.icon_container}>
                <img className={styles.icon} src={imageUrl} alt={alt} />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link}>
                Learn more
            </a>
        </div>
    );
}
