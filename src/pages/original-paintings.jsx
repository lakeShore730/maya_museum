import ProductCart from "../components/common/product-cart";
import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";
import painting4 from "../assets/images/painting4.jpg";
import painting5 from "../assets/images/painting5.jpg";
import painting6 from "../assets/images/painting6.jpg";

const search = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] mt-10">
      <div className="product-grid">
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting2} />
        <ProductCart name="Abc painting" price={200} image={painting3} />
        <ProductCart name="Abc painting" price={200} image={painting4} />
        <ProductCart name="Abc painting" price={200} image={painting5} />
        <ProductCart name="Abc painting" price={200} image={painting6} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting2} />
        <ProductCart name="Abc painting" price={200} image={painting3} />
        <ProductCart name="Abc painting" price={200} image={painting4} />
        <ProductCart name="Abc painting" price={200} image={painting5} />
        <ProductCart name="Abc painting" price={200} image={painting6} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting4} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting2} />
        <ProductCart name="Abc painting" price={200} image={painting3} />
        <ProductCart name="Abc painting" price={200} image={painting4} />
        <ProductCart name="Abc painting" price={200} image={painting5} />
        <ProductCart name="Abc painting" price={200} image={painting6} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting1} />
        <ProductCart name="Abc painting" price={200} image={painting2} />
        <ProductCart name="Abc painting" price={200} image={painting3} />
      </div>
      <div className="flex justify-center mt-16">
        <button className="text-primary px-16 py-2 border border-primary hover:border-emerald-900 hover:text-emerald-900">
          Load More
        </button>
      </div>
    </div>
  );
};

export default search;
