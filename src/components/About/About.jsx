import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-28 bg-base">
      <div className="hero-content flex-col gap-12 lg:gap-0 lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg" />
          <img src={parts} className="w-1/2 right-12 top-1/2 border-8 border-white absolute rounded-lg" />
        </div>
        <div className="lg:w-1/2 lg:max-w-lg">
          <h3 className="text-xl text-primary font-bold mb-4">About us</h3>
          <h1 className="text-4xl font-bold mb-7">We are qualified <br /> & of experience in this field </h1>
          <p className="pb-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn mt-7 bg-primary border-none text-white">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
