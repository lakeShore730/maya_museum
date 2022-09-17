import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";
import painting5 from "../assets/images/painting5.jpg";
import ContactInfo from "../components/common/contact-info";

const ProductDetails = () => {
  return (
    <div className="min-h-[calc(100vh-300px)]">
      <div className="mt-10">
        <p>
          <Link to="/" className="text-gray-700">
            Home /{" "}
          </Link>
          <span className="text-gray-500">
            products / Palm Trees with Gold Sun
          </span>
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <div className="flex justify-center items-center aspect-[1/1.2] p-5 border">
          <div>
            <img
              src={painting5}
              alt="painting-v6"
              className="w-full h-full aspect-[1/1.2] object-cover max-w-[450px]"
            />
          </div>
        </div>

        <div>
          <p className="mt-2 subheader text-gray-700">
            Palm Trees with Gold Sun
          </p>
          <p className="mt-3 text-gray text-[18px]">$ 300.00</p>

          <button className="mt-8 p-2 w-full max-w-[350px] text-md font-semibold text-white bg-primary hover:bg-darkPrimary">
            Buy Now
          </button>

          <button className="mt-5 p-2 w-full max-w-[350px] text-md font-semibold text-gray-900 border border-secondary hover:border-darkSecondary">
            Add to cart
          </button>

          <div className="mt-8">
            <p className="text-lg text-gray-700">Product Info.</p>
            <div className="flex gap-5 mt-5 text-gray-700 text-md">
              <div>
                <p>Size:</p>
                <p className="mt-2">Added date:</p>
                <p className="mt-2">Colors:</p>
              </div>
              <div>
                <p>25cm x 35cm (h x w)</p>
                <p className="mt-2">2022-11-24</p>
                <p className="mt-2">Green, gray, white, etc</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-700">Share product</p>
            <div className="flex mt-5 gap-5">
              <Facebook
                size={30}
                className="text-primary border border-gray-200 rounded-full p-[5px] cursor-pointer hover:text-darkPrimary"
              />
              <Twitter
                size={30}
                className="text-primary border border-gray-200 rounded-full p-[5px] cursor-pointer hover:text-darkPrimary"
              />
              <Instagram
                size={30}
                className="text-primary border border-gray-200 rounded-full p-[5px] cursor-pointer hover:text-darkPrimary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="paragraph text-gray-600">
          This 'Palm Trees with Gold Sun' illustration print is a conversation
          starter. It would look great anywhere from your first apartment all
          the way to your dream home!. Should any problem or query regarding
          either the product or the purchase arise, please email me to discuss,
          I would appreciate it. EmilyMercedesArt@gmail.com
        </p>
      </div>

      <ContactInfo className="mt-16" />
    </div>
  );
};

export default ProductDetails;
