
const ProductCard = ({img, title, price}) => {
  return (
    <div className="card bg-base-100 border">
      <figure className="mx-6 mt-6 rounded-xl bg-gray-100">
        <img src={img} alt="Shoes" className="rounded-xl h-52 object-cover" />
      </figure>
      <div className="card-body p-6 items-center">
        <div className="rating rating-xs">
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
        </div>
        <h2 className="card-title">{title}</h2>
        <div className="card-actions text-primary font-bold justify-between items-center">
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
