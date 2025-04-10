import React from "react";

const Home = () => {
  return (
    <div class="header">
      <div class="header__container">
        <div class="header__logo">
          <img src="/icon/Group 2.png" alt="logo" />
          <button class="header__search">
            <img src="/icon/Forma 1.svg" alt="" />
          </button>
        </div>
        <div class="header__nav nav">
          <details class="nav__link">
            <summary class="nav__link_menu">
              <img src="/icon/Forma 1 (2).svg" alt="" />
            </summary>
            <div class="nav__link_menu_content">
              <section style={{ margin: "24px" }}>MENU</section>
              <details class="nav__link_menu_content_item">
                <summary class="nav__link_menu_content_category">MAN</summary>
                <ul>
                  <a href="#">
                    <li class="category_list">Accessories</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Bags</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Denim</li>
                  </a>
                  <a href="#">
                    <li class="category_list">T-Shirts</li>
                  </a>
                </ul>
              </details>

              <details class="nav__link_menu_content_item">
                <summary class="nav__link_menu_content_category">WOMAN</summary>
                <ul>
                  <a href="#">
                    <li class="category_list">Accessories</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Jackets & Coats</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Polos</li>
                  </a>
                  <a href="#">
                    <li class="category_list">T-Shirts</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Shirts</li>
                  </a>
                </ul>
              </details>

              <details class="nav__link_menu_content_item">
                <summary class="nav__link_menu_content_category">KIDS</summary>
                <ul>
                  <a href="#">
                    <li class="category_list">Accessories</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Jackets & Coats</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Polos</li>
                  </a>
                  <a href="#">
                    <li class="category_list">T-Shirts</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Shirts</li>
                  </a>
                  <a href="#">
                    <li class="category_list">Bags</li>
                  </a>
                </ul>
              </details>
            </div>
          </details>

          <a href="#" class="nav__link_account">
            <img src="/icon/Forma 1 (1).svg" alt="" />
          </a>
          <a href="#" class="nav__link_cart">
            <img src="/icon/Forma 1 (3).svg" alt="" />
          </a>
        </div>
      </div>
    </div>

    













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

export default Home;
