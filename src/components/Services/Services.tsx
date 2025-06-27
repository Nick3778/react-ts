import s from "./Services.module.scss";
import { Cards } from "../Cards/Cards";
import { dataCards } from "../../data/servicesData";
import type { CardProps } from "../Cards/Cards.types";

export const Services = () => {
  return (
    <section className={s.services}>
      <div className={s.container}>
        <span className="red_text">Our services</span>
        <h2 className={s.title}>We provide great services for our customers based on needs</h2>
        <div className={s.cards_container}>
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
};
