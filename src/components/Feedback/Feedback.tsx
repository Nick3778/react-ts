import styles from "./Feedback.module.scss";

export type Feedback = {
  imageURL: string;
  ratingImage: string;
  text: string;
  name: string;
  profession: string;
  altAvatar: string;
  altRating: string;
};

export function Feedback(value: Feedback) {
  return (
    <section className={styles.feedback}>
      <div className={styles.feedback_container}>
        <div className={styles.left}>
          <img src={value.imageURL} alt={value.altAvatar} />
        </div>
        <div className={styles.right}>
          <div className={styles.rating_container}>
            <img className={styles.rating} src={value.ratingImage} alt={value.altRating} />
          </div>
          <h4 className={styles.title}>{value.text}</h4>
          <div className={styles.author_container}>
            <span className={styles.author_name}>{value.name}</span>
            <span className={styles.author_profession}>{value.profession}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
