const Card = ({data}) => {
  return (
    <div id="card">
      <img
        src={data.image}
      />
      <h2 id="restrant">{data.restaurantName}</h2>
      <h3 id="foodName">{data.cuisine}</h3>
      <h3 id="rating">{data.rating}</h3>
    </div>
  );
};
export default Card;
