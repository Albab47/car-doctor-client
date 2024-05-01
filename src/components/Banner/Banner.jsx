import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import SliderContent from "../SliderContent/SliderContent";
import SliderNavigation from "../SliderNavigation/SliderNavigation";

const Banner = () => {
  return (
    <div className="carousel w-full h-[37.5rem] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover" />
        {/* content container */}
        <SliderContent>
          <h2 className="text-5xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white/85">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-primary text-white border-none">
              Discover More
            </button>
            <button className="btn btn-outline text-white ">
              Latest Project
            </button>
          </div>
        </SliderContent>
        <SliderNavigation lSlide={"slide4"} rSlide={"#slide2"} />
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <SliderContent>
          <h2 className="text-5xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white/85">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-primary text-white border-none">
              Discover More
            </button>
            <button className="btn btn-outline text-white ">
              Latest Project
            </button>
          </div>
        </SliderContent>
        <SliderNavigation lSlide={"#slide1"} rSlide={"#slide3"} />
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <SliderContent>
          <h2 className="text-5xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white/85">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-primary text-white border-none">
              Discover More
            </button>
            <button className="btn btn-outline text-white ">
              Latest Project
            </button>
          </div>
        </SliderContent>
        <SliderNavigation lSlide={"#slide2"} rSlide={"#slide4"} />
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <SliderContent>
          <h2 className="text-5xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white/85">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn bg-primary text-white border-none">
              Discover More
            </button>
            <button className="btn btn-outline text-white ">
              Latest Project
            </button>
          </div>
        </SliderContent>
        <SliderNavigation lSlide={"#slide3"} rSlide={"#slide1"} />
      </div>
    </div>
  );
};

export default Banner;
