import React, { useState } from "react";
import { Search, X } from "react-feather";
import cn from "classnames";

const SearchFiled = (props) => {
  const { className = "" } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className={cn(
        "p-2 border border-gray-400 flex gap-2 items-center",
        className
      )}
    >
      <Search size={20} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none border-none text-gray-700"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <X
        size={20}
        className={cn("text-gray-400 hover:text-gray-500 cursor-pointer", {
          hidden: !searchText.trim().length,
          block: searchText.trim().length,
        })}
        onClick={() => setSearchText("")}
      />
    </div>
  );
};

export default SearchFiled;
