import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image">
          <img src={image} alt={name} />
        </div>
        <div className="item-details">
          <h3 className="item-name">{name}</h3>
          <div className="item-prices">
            <span className="item-price-new">${new_price}</span>
            {old_price && <span className="item-price-old">${old_price}</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;