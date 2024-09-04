const Card = ({
  imageSource,
  seriesName,
  rating,
  releaseDate,
  castName,
  seriesDesc,
}) => {
  return (
    <div className="card">
      <img src={imageSource} alt="Card Image" />
      <h2>{seriesName}</h2>
      <h3>
        Rating :
        <span className={`rating ${rating >= 7 ? "super-hit" : "average"}`}> {rating}</span>
      </h3>
      <p>Released on {releaseDate}</p>
      <p>Cast : {castName}</p>
      <p>Info : {seriesDesc}</p>
    </div>
  );
};

export default Card;
