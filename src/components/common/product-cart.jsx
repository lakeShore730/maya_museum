import { Link } from "react-router-dom";
import { Plus } from "react-feather";

const ProductCart = (props) => {
  const { name, price, image } = props;

  return (
    <div className="rounded-sm transition duration-200 hover:scale-[1.04] mt-2">
      <div>
        <Link to={`/products/1`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full aspect-[1/1.2] object-cover"
          />
        </Link>
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <p className="text-gray-700">{name}</p>
          <p className="text-gray-900 text-base mt-1">$ {price.toFixed(2)}</p>
        </div>
        <Plus
          size={24}
          className="text-white cursor-pointer bg-primary rounded-sm p-[1px] hover:bg-darkPrimary"
        />
      </div>
    </div>
  );
};

export default ProductCart;
