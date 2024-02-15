import React from "react";

const SeeMore = ({ seeMore, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <div className="see-more" onClick={handleClick}>
      {seeMore ? "See less" : "See more"}
    </div>
  );
};

export default SeeMore;
