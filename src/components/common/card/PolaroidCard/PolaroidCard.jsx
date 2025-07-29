import React from "react";

const PolaroidCard = ({content }) => {
  return (
    <div className="polaroid_card">
      <div className={`polaroid_img`}></div>
      {content}
    </div>
  );
};

export default PolaroidCard;
