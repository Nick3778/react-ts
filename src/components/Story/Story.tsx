import s from "./Story.module.scss";
import { storyData as data } from "../../data/storyData";

export const Story = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <div className={s.text_container}>
          <span className="red_text">{data.red}</span>
          <h2 className={s.title}>{data.title}</h2>
        </div>
        <div className={s.content}>
          <div className={s.content_left_foto}>
            <img src={data.img1} alt={data.alt1} />
          </div>
          <div className={s.content_right}>
            <div className={s.two_fotos}>
              <div className={s.mid_foto}>
                <img src={data.img2} alt={data.alt2} />
              </div>
              <div className={s.last_foto}>
                <img src={data.img3} alt={data.alt3} />
              </div>
            </div>

            <div className={s.description}>
              <span>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
