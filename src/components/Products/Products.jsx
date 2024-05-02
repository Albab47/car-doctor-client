import ProductCard from "./ProductCard";
import product1 from '../../assets/images/products/1.png';
import product2 from '../../assets/images/products/2.png';
import product3 from '../../assets/images/products/3.png';
import product4 from '../../assets/images/products/4.png';
import product5 from '../../assets/images/products/5.png';
import product6 from '../../assets/images/products/6.png';

const Products = () => {
  return (
    <section className="my-28">
      <header className="text-center max-w-2xl mx-auto space-y-5">
        <h3 className="text-xl text-primary font-semibold">Popular products</h3>
        <h2 className="text-4xl font-bold">Our Popular Products</h2>
        <p className="text-light">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </header>

      <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* {services.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))} */}
        <ProductCard img={product1} title={'Car Engine Plug'} price={'20'} />
        <ProductCard img={product2} title={'Car Air Filter'} price={'50'} />
        <ProductCard img={product3} title={'Cools heavy break'} price={'30'} />
        <ProductCard img={product4} title={'Cools car suspention'} price={'60'} />
        <ProductCard img={product5} title={'Car thick tier'} price={'10'} />
        <ProductCard img={product6} title={'Cars battery'} price={'60'} />
      </div>
    </section>
  );
};

export default Products;
