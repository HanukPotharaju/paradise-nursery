import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg"; // Ensure this file exists

function LandingPage() {
  return (
    <div className="landing-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      padding: "20px"
    }}>
      <h1>Welcome to Paradise Nursery</h1>
      <h3>Bringing Nature Closer to You</h3>

      <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
        🌱 At Paradise Nursery, we believe that plants are more than just decoration—they bring life, serenity, 
        and a breath of fresh air into every space. Whether you're looking for lush greenery, fragrant blossoms, or 
        air-purifying houseplants, we have something for every plant lover.
      </p>

      <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
        💚 Our Commitment to Quality  
        We take pride in offering high-quality plants that are nurtured with care and expertise. Whether you're a 
        beginner or an experienced gardener, our team is here to guide you in choosing the perfect plants for your home or office.
      </p>

      <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
        🌿 A Greener Tomorrow  
        Join us on our mission to make the world greener, one plant at a time. Explore our collection, get expert 
        advice, and bring home nature’s best.
      </p>

      <Link to="/products">
        <button style={{
          padding: "12px 25px",
          background: "#27ae60",
          color: "white",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s"
        }}>
          🌱 Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
