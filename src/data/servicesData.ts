import greenIcon from "../assets/images/cards/green.png";
import blueIcon from "../assets/images/cards/blue.png";
import redIcon from "../assets/images/cards/red.png";
import type { CardProps } from "../components/Cards/Cards.types";

export const dataCards: CardProps[] = [
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
