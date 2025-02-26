import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Import Images
import aloeVeraImage from "../assets/aloevera.jpg";
import lavenderImage from "../assets/lavender.jpg";
import snakePlantImage from "../assets/snake-plant.jpg";
import fernImage from "../assets/fern.jpg";
import peaceLilyImage from "../assets/peacelily.jpg";
import bonsaiImage from "../assets/Bonsai.jpg";

const plantsArray = [
  { id: 1, name: "Aloe Vera", price: "$10", description: "Air-purifying plant",category: "Air-Purifying", image: aloeVeraImage },
  { id: 2, name: "Snake Plant", price: "$15", description: "Low-maintenance plant",category: "Low Maintenance", image: snakePlantImage },
  { id: 3, name: "Lavender", price: "$12", description: "Aromatic plant",category: "Fragrant", image: lavenderImage },
  { id: 4, name: "Fern", price: "$14", description: "Lush green foliage", category: "Decorative", image: fernImage },
  { id: 5, name: "Peace Lily", price: "$18", description: "Air-purifying with beautiful flowers", category: "Air-Purifying", image: peaceLilyImage },
  { id: 6, name: "Bonsai", price: "$25", description: "Miniature tree for indoor beauty", category: "Decorative", image: bonsaiImage }
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const groupedPlants = plantsArray.reduce((acc, plant) => {
    acc[plant.category] = acc[plant.category] || [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-listing">
      {Object.entries(groupedPlants).map(([category, plants]) => (
        <div key={category} className="plant-category">
          <h2>{category}</h2>
          <div className="plant-group">
            {plants.map((plant) => (
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
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;