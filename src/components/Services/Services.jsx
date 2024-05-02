import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      setServices(data);
    };
    fetchData()
  }, []);

  return (
    <section className="my-28">
      <header className="text-center max-w-2xl mx-auto space-y-5">
        <h3 className="text-xl text-primary font-semibold">Our services</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-light">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </header>

      <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {services.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))}
      </div>
    </section>
  );
};

export default Services;
