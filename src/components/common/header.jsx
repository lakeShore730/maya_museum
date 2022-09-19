import { ShoppingBag, User } from "react-feather";
import { Link } from "react-router-dom";
import cn from "classnames";
import buddhaImage from "../../assets/images/buddha.png";
import SearchFiled from "../ui/search-filed";

const Header = (props) => {
  const { className = "", ...others } = props;

  return (
    <header className={cn("flex justify-between", className)} {...others}>
      <div className="flex items-center gap-8">
        <Link to="/">
          <img
            src={buddhaImage}
            alt="buddha statue"
            className="w-[80px] h-auto cursor-pointer"
          />
        </Link>
        <div>
          <p className="text-[24px] font-medium text-darkPrimary">MAYA</p>
          <p className="text-[24px] font-medium mt-[8px] text-darkPrimary">
            MUSEUM
          </p>
          <p className="text-[24px] font-medium mt-[8px] text-darkPrimary">
            COLLECTION
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 justify-end">
          <Link to="/cart">
            <ShoppingBag size={25} className="text-gray-700" />
          </Link>
          <Link to="/account">
            <User size={25} className="text-gray-700" />
          </Link>
        </div>
        <div className="mt-20">
          <SearchFiled className="w-[350px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
