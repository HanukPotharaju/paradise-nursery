import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Import Images
import aloeVeraImage from "../assets/aloevera.jpg";
import lavenderImage from "../assets/lavender.jpg";
import snakePlantImage from "../assets/snake-plant.jpg";

const plantsArray = [
  { id: 1, name: "Aloe Vera", price: "$10", description: "Air-purifying plant", image: aloeVeraImage },
  { id: 2, name: "Snake Plant", price: "$15", description: "Low-maintenance plant", image: snakePlantImage },
  { id: 3, name: "Lavender", price: "$12", description: "Aromatic plant", image: lavenderImage },
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="product-listing">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.price}</p>
          <button 
            onClick={() => dispatch(addItem(plant))} 
            disabled={cartItems.some((item) => item.id === plant.id)}
          >
            {cartItems.some((item) => item.id === plant.id) ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
