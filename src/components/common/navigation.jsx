import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import {
  leftNavigationItems,
  rightNavigationItems,
} from "../../navigation/navigation-items";

const Navigation = (props) => {
  const { className = "", ...others } = props;
  const { pathname } = useLocation();

  return (
    <div className={cn("flex justify-between", className)} {...others}>
      <div className="flex gap-8">
        {leftNavigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={cn("text-[18px] tracking-wide hover:text-primary", {
              "border-b-2 border-primary text-primary": pathname === item.path,
              "text-gray-800": pathname !== item.path,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-8">
        {rightNavigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={cn("text-[18px] hover:text-primary", {
              "border-b-2 border-primary text-primary": pathname === item.path,
              "text-gray-800": pathname !== item.path,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
