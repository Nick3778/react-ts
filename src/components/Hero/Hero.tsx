import styles from "./Hero.module.scss";
import LinkButton from "../LinkButton/LinkButton";
import logo from "../../assets/images/hero/girl.png";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.red_text}>
                        Let’s shift your business
                    </span>
                    <h1 className={styles.title}>
                        Shift your business fast with Shade Pro.
                    </h1>
                    <p className={styles.subtitle}>
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next consultancy website
                        within few minutes.
                    </p>
                    <LinkButton />
                </div>
                <div className={styles.right}>
                    <img className={styles.foto} src={logo} alt="girl" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
