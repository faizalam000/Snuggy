const Card = ({ data }) => {
  const style = {
    width: "250px",
    // border: "1px solid black",
    padding: "5px",
    margin: "10px",
  };
  const imageStyle = {
    width: "100%",
    height: "170px",
    borderRadiusTop:"20px"
  };
  return (
    <div className="card" style={style}>
      <img style={imageStyle} src={data.image} />
      <h1 className="text-2xl" id="restrant">{data.name}</h1>
      <h3 id="foodName">{"⭐⭐"}{data.cuisines.join(" ")}</h3>
      <h3 id="rating">{data.offer}</h3>
    </div>
  );
};
export default Card;
