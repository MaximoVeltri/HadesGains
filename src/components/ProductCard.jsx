import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ name, description, price, image, rating }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? 'star-filled' : 'star-empty'}
            />
          ))}
        </div>
        <p>{description}</p>
        <div className="product-footer">
          <span className="price">{price}</span>
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
}