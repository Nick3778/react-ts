import s from "./Cards.module.scss";
import type { CardProps } from "./Cards.types";

export const Cards = ({ title, description, imageUrl, link, alt, backgroundColor }: CardProps) => {
  return (
    <div className={s.card} style={{ backgroundColor }}>
      <div className={s.icon_container}>
        <img className={s.icon} src={imageUrl} alt={alt} />
      </div>
      <h4 className={s.title}>{title}</h4>
      <p className={s.description}>{description}</p>
      <a className={s.link} href={link}>
        Learn more
      </a>
    </div>
  );
};
