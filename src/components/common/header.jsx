import { ShoppingBag, Sun, User } from "react-feather";
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
            className="w-[90px] h-auto cursor-pointer"
          />
        </Link>
        <div>
          <p className="text-emerald-900 font-medium text-3xl">MAYA</p>
          <p className="text-emerald-900 font-medium text-3xl mt-2">MUSEUM</p>
          <p className="text-emerald-900 font-medium text-3xl mt-2">
            COLLECTION
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 justify-end">
          <User
            size={25}
            className="text-emerald-700 cursor-pointer hover:text-emerald-900"
          />
          <ShoppingBag
            size={25}
            className="text-emerald-700 cursor-pointer hover:text-emerald-900"
          />
          <Sun
            size={25}
            className="text-emerald-700 cursor-pointer hover:text-emerald-900"
          />
        </div>
        <div className="mt-20">
          <SearchFiled className="w-[350px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
