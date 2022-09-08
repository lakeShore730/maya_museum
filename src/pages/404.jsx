import React from "react";
import { Frown } from "react-feather";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-auto min-h-[calc(100vh-380px)] flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <Frown size={40} className="text-primary" />
        </div>
        <p className="text-center text-gray-500 font-medium text-xl mt-3">
          Page not found
        </p>

        <p className="mt-3 text-gray-500 text-sm">
          Click{" "}
          <Link to="/">
            <span className="text-gray-700 cursor-pointer underline">here</span>
          </Link>{" "}
          to redirect to home page.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
