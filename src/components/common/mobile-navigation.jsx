import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { Menu, Search, ShoppingBag, User } from "react-feather";
import siteSettings from "../../site-settings";
import NavigationDrawer from "./navigation-drawer";

const MobileNavigation = ({ className = "" }) => {
  const [isDrawerNavDrawerOpened, setIsNavDrawerOpened] = useState(false);

  return (
    <>
      <div className={cn("flex justify-between items-center gap-2", className)}>
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={siteSettings.logo} alt="logo" className="w-[20px]" />
          </Link>
          <Link to="/">
            <p className="uppercase text-base tracking-wide font-semibold text-emerald-700">
              {siteSettings.appShortName}
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/search">
            <Search size={20} className="text-emerald-700 select-none" />
          </Link>
          <User size={20} className="text-emerald-700 select-none" />
          <Link to="/cart">
            <ShoppingBag size={20} className="text-emerald-700 select-none" />
          </Link>
          <Menu
            size={20}
            className="text-emerald-700 select-none cursor-pointer"
            onClick={() => setIsNavDrawerOpened(true)}
          />
        </div>
      </div>

      <NavigationDrawer
        open={isDrawerNavDrawerOpened}
        setOpen={setIsNavDrawerOpened}
      />
    </>
  );
};

export default MobileNavigation;
