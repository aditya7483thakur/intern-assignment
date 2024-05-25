import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import Offers from "./components/Offers";
import Map from "./components/Map";
import Bar from "./components/Bar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products"); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  let ban =
    "https://www.shutterstock.com/image-vector/colorful-discount-sale-podium-special-600nw-2055955985.jpg";

  const banners = [ban, ban, ban, ban, ban, ban];

  return (
    <div>
      <div className="top">
        <Offers items={banners} />

        <Map />
      </div>
      <Bar />

      <div className="bottom">
        <h2 style={{ marginTop: "2rem" }}>Trending Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Carousel items={products.map((product) => product.image)} />
        )}
      </div>
    </div>
  );
};

export default App;
