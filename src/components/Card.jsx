import styled from "styled-components";

const Para= styled.p({
  fontSize: '1.4rem',
  padding: '0.2rem 0',
  fontStyle: 'italic'
});

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
        <span className={`rating ${rating >= 7 ? "super-hit" : "average"}`}>
          {rating}
        </span>
      </h3>
      <Para>Released on {releaseDate}</Para>
      <Para>Cast : {castName}</Para>
      <Para>Info : {seriesDesc}</Para>
    </div>
  );
};

export default Card;
