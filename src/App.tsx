import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { Feedback } from "./components/Feedback/Feedback";
//переделать///////////////////////////////////////////////////////
import type { Feedback as h } from "./components/Feedback/Feedback";
import avatar from "./assets/images/feedback/oval.png";
import stars from "./assets/images/feedback/stars.svg";
////////////////////////////////////////////////////////////
const data: h = {
  imageURL: avatar,
  ratingImage: stars,
  text: '"“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”',
  name: "Franklin Hicks",
  profession: "Web Developer",
  altAvatar: "Developer",
  altRating: "rating",
};
function App() {
  return (
    <>
      <div className="bg-hero">
        <Header />
        <Hero />
      </div>
      <Services />
      <Feedback
        imageURL={data.imageURL}
        ratingImage={data.ratingImage}
        text={data.text}
        name={data.name}
        profession={data.profession}
        altAvatar={data.altAvatar}
        altRating={data.altRating}
      />
    </>
  );
}

export default App;
