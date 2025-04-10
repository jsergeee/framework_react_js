import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div class="hero">
        <div class="img_hero">
        </div>

        <div class="text_hero">
          <h1 style={{ marginLeft: "8px", flexwrap: "nowrap" }}>THE BRAND</h1>
  
          <p
            style={{
              marginLeft: "10px",
              display: "inline",
              whiteSpace: "nowrap",
            }}
          >
            OF LUXERIOUS
          </p>
          <p
            style={{
              color: "rgb(241, 109, 127)",
              display: "inline",
              marginLeft: "10px",
              whitespace: "nowrap",
            }}
          >
            FASHION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
