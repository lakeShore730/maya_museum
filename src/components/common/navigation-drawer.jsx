import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import cn from "classnames";
import { X } from "react-feather";
import siteSettings from "../../site-settings";
import {
  leftNavigationItems,
  rightNavigationItems,
} from "../../navigation/navigation-items";
import { useState } from "react";

const NavigationDrawer = (props) => {
  const { open, setOpen } = props;
  const { pathname } = useLocation();
  const [navigation] = useState([
    ...leftNavigationItems,
    ...rightNavigationItems,
  ]);

  const toggleDrawer = () => setOpen(false);
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      direction="right"
      size="280px"
      className=""
    >
      <div className="px-3 py-2">
        <div className="flex  items-center bg-[#fcfcfc] py-2">
          <div className="flex items-center gap-2 grow">
            <img src={siteSettings.logo} className="w-[20px]" alt="app logo" />
            <h1 className="uppercase text-base tracking-wide font-semibold text-emerald-700">
              {siteSettings.appShortName}
            </h1>
          </div>
          <X
            size={25}
            className="glow-none cursor-pointer text-emerald-700 select-none"
            onClick={toggleDrawer}
          />
        </div>

        <div className="mt-5">
          {navigation.map((nav) => (
            <div key={nav.id} className="mt-2">
              <Link
                to={nav.path}
                className={cn("flex items-center px-2 py-2 rounded-sm", {
                  "bg-indigo-100": nav.path === pathname,
                })}
                onClick={toggleDrawer}
              >
                <nav.Icon
                  size="18"
                  className={cn({
                    "text-indigo-900": nav.path === pathname,
                    "text-gray-700": nav.path !== pathname,
                  })}
                />
                <p className="ml-4 text-sm tracking-wide text-gray-700">
                  {nav.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
