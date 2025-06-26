import { useEffect, useState } from "react";

const Search = ({dataSearch}) => {
  const style = {
    width: "250px",
    height: "35px",
    borderRadius: "5px",
    fontSize: "15px",
    paddingLeft: "5px",
    marginLeft: "10px"
  };
  function changeEvent(e) {
    dataSearch(e.target.value);
  }
  return (
    <>
      <input
      className="bg-gray-200 border-none focus:outline-none "
        style={style}
        id="search"
        type="text"
        placeholder="search"
        onChange={(e) => {
          changeEvent(e);
        }}
      />
    </>
  );
};
export default Search;
