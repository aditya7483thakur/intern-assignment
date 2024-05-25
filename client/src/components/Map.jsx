import React from "react";

const Map = () => {
  return (
    <div className="pincode-box">
      <img
        src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2dsZSUyMG1hcHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Product"
        className="pincode-box-image"
      />
      <div className="pincode-box-content">
        <p style={{ fontSize: "1.5rem" }}>
          Enter Your Pincode to check availability and faster delivery option
        </p>
        <input
          type="text"
          placeholder="Enter your pincode"
          className="pincode-box-input"
          style={{ marginBottom: "1.5rem" }}
        />
        <div className="pincode-box-buttons">
          <button className="submit-button">Submit</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
