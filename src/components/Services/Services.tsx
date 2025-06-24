import styles from "./Services.module.scss";
import { Cards } from "../Cards/Cards";
import greenIcon from "../../assets/images/cards/green.png";
import blueIcon from "../../assets/images/cards/blue.png";
import redIcon from "../../assets/images/cards/red.png";

export type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    alt: string;
    backgroundColor: string;
};

const dataCards: CardProps[] = [
    {
        title: "Graphic Design",
        description:
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        backgroundColor: "#68D585",
        imageUrl: greenIcon,
        link: "/",
        alt: "Graphic Design Icon",
    },
    {
        title: "Web Development",
        description:
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        backgroundColor: "#473BF0",
        imageUrl: blueIcon,
        link: "/",
        alt: "Web Development Icon",
    },
    {
        title: "Content Writing",
        description:
            "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        backgroundColor: "#F64B4B",
        imageUrl: redIcon,
        link: "/",
        alt: "Content Writing Icon",
    },
];

function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <span className="red_text">Our services</span>
                <h2 className={styles.title}>
                    We provide great services for our customers based on needs
                </h2>
                <div className={styles.cards_container}>
                    {dataCards.map((item: CardProps, index: number) => (
                        <Cards
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            link={item.link}
                            alt={item.alt}
                            backgroundColor={item.backgroundColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
