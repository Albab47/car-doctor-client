/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl h-52 object-cover" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions text-primary font-bold justify-between items-center">
          <p>Price: ${price}</p>
          <button className="btn btn-circle text-primary btn-sm">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
