import styles from "./Header.module.scss";
import LinkButton from "../LinkButton/LinkButton";

function Header() {
    return (
        <div className={styles.header_container}>
            <header className={styles.header}>
                <div className={styles.container_left}>
                    <div className={styles.header_logo}>
                        <a href="/">Brainwave.io</a>
                    </div>

                    <nav className={styles.nav}>
                        <ul className={styles.nav_menu}>
                            <li className={styles.nav_item}>
                                <a className={styles.nav_link} href="/">
                                    Demos
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a className={styles.nav_link} href="/">
                                    Pages
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a className={styles.nav_link} href="/">
                                    Support
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a className={styles.nav_link} href="/">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <LinkButton />
                </div>
            </header>
        </div>
    );
}

export default Header;
