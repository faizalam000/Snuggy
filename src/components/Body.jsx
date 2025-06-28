import Search from "../Common/Search";
import Card from "../Common/Card";
import Shimmer from "../Common/Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);

  useEffect(() => {
    callData();
  }, []);
  
  async function callData() {
    const fetchData = await fetch("http://localhost:3000/getAllData");
    const res = await fetchData.json();
    setData(res);
    setFilterData(res);
  }

  const SearchFunc = (e) => {
    const searched = data.filter((element, index) => {
      return element.name.toLowerCase().includes(e.toLowerCase());
    });
    setFilterData(searched);
  };
  if (!data[0]) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  return (
    <div id="Body">
      <Search dataSearch={SearchFunc} />
      <div className="cards-container">
        {filteredData.map((element, index) => {
          return (
            <Link
              key={element?.id}
              state={element}
              to={`/${element?.name}/${element?.id}`}
            >
              <Card data={element} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
