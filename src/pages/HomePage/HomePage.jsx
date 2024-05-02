import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <ContactInfo />
      <Products />
    </div>
  );
};

export default HomePage;
