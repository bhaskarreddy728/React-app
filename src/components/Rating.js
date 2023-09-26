import React from "react";
import Proptypes from "prop-types";
const Rating = ({stars}) => (
<div className="rating">
  {[...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(e=>(
    <div className="star" key={e}/>
  ))}
</div>
);
Rating.prototype ={
  stars:Proptypes.number.isRequired
}
export default Rating;
