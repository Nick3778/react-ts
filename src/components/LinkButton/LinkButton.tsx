import styles from "./LinkButton.module.scss";

function LinkButton( ) {
    return (
        <a className={styles.button} href="/" role="button">Get started a project</a>
    )
}

export default LinkButton;