import ProductCart from "../components/common/product-cart";
import ContactCard from "../components/common/contact-card";
import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";
import painting4 from "../assets/images/painting4.jpg";
import painting5 from "../assets/images/painting5.jpg";
import painting6 from "../assets/images/painting6.jpg";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-5 mt-4">
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

      <ContactCard className="mt-16" />
    </div>
  );
};

export default Home;
