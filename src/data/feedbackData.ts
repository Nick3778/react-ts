import avatar from "../assets/images/feedback/oval.png";
import stars from "../assets/images/feedback/stars.svg";
import type { Feedback } from "../components/Feedback/Feedback.types";

export const dataFeedback: Feedback = {
  imageURL: avatar,
  ratingImage: stars,
  text: `“OMG! I cannot believe that I have got a brand new 
          landing page after getting Albino. It was super easy 
          to edit and publish.”`,
  name: "Franklin Hicks",
  profession: "Web Developer",
  altAvatar: "Developer",
  altRating: "rating",
};
