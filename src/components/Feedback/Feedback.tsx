import s from "./Feedback.module.scss";
import { dataFeedback as value } from "../../data/feedbackData";

export const Feedback = () => {
  return (
    <section className={s.feedback}>
      <div className={s.feedback_container}>
        <div className={s.left}>
          <img src={value.imageURL} alt={value.altAvatar} />
        </div>
        <div className={s.right}>
          <div className={s.rating_container}>
            <img className={s.rating} src={value.ratingImage} alt={value.altRating} />
          </div>
          <h4 className={s.title}>{value.text}</h4>
          <div className={s.author_container}>
            <span className={s.author_name}>{value.name}</span>
            <span className={s.author_profession}>{value.profession}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
