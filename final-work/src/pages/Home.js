import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
        
      <div className="Hero">
        <div class="hero">
          <div class="img_hero"></div>

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
      <div className="dody-cont">
        <div class="offer">
          <div class="offer_item1">
            <p class="text_ofer" style={{ color: "white" }}>
              30% OFF
            </p>
            <p style={{ color: " #F16D7F" }}>FOR WOMEN</p>
          </div>

          <div class="offer_item2">
            <p class="text_ofer" style={{ color: "white" }}>
              HOT DEAL
            </p>
            <p style={{ color: " #F16D7F" }}>FOR MEN</p>
          </div>
          <div class="offer_item3">
            <p class="text_ofer" style={{ color: "white" }}>
              NEW ARRIVALS
            </p>
            <p style={{ color: " #F16D7F" }}>FOR KIDS</p>
          </div>
        </div>

        <div class="offer_2">
          <p style={{ color: "white" }}>LUXIROUS & TRENDY</p>
          <p style={{ color: " #F16D7F" }}>ACCESORIES</p>
        </div>
      </div>
      <section class="goods">
        <div class="container goods__container">
          <h2 class="goods__title">Fetured Items</h2>
          <p class="goods__description">
            Shop for items based on what we featured in this week
          </p>
          <ul class="goods__list">
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/11.jpg" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/12.jpg" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/13.jpg" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/14.jpg" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/15.png" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
            <li class="goods__item product">
              <div class="product__image-wrapper">
                <img class="product__image" src="/image/16.jpg" alt="" />
                <button class="product__add">Add to Cart</button>
              </div>
              <div class="product__content">
                <h3 class="product__title">ELLERY X M'O CAPSULE</h3>
                <p class="product__description">
                  Known for her sculptural takes on traditional tailoring,
                  Australian arbiter of cool Kym Ellery teams up with Moda
                  Operandi.
                </p>
                <p class="product__price">$52.00</p>
              </div>
            </li>
          </ul>
          <button class="goods__add-btn" type="submit">
            Browse All Product
          </button>
        </div>
      </section>


    </div>
  );
};

export default Home;
