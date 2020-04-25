import React from 'react';
import StarRating from './StarRating';
const Color = ({ id,title, color, rating=0 , onRemove=f=>f, onRate=f=>f}) =>
  <section className="color">
    <h1 style={{display:"inline-block"}}>{title}</h1> <button onClick={()=>onRemove(id)}>X</button>
    <div className="showcolor"
          style={{ backgroundColor:color }}>
    </div>
    <div>
      <StarRating id={id} starsSelected={rating} onRate={onRate}/>
    </div>
  </section>

export default Color;
