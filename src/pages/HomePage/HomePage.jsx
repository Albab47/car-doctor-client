import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            This is home page
        </div>
    );
};

export default HomePage;