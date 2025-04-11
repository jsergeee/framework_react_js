import React from "react";
import { Link } from "react-router-dom";

const Header = ({ pageTitle = "HOME" }) => {
  return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src="/icon/Group 2.png" alt="logo" />
            <button className="header__search">
              <img src="/icon/Forma 1.svg" alt="" />
            </button>
          </div>
          <div className="header__nav nav">
            <details className="nav__link">
              <summary className="nav__link_menu">
                <img src="/icon/Forma 1 (2).svg" alt="" />
              </summary>
              <div className="nav__link_menu_content">
                <section style={{ margin: "24px" }}>MENU</section>
                <details className="nav__link_menu_content_item">
                  <summary className="nav__link_menu_content_category">
                    MAN
                  </summary>
                  <ul>
                    <a href="#">
                      <li className="category_list">Accessories</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Bags</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Denim</li>
                    </a>
                    <a href="#">
                      <li className="category_list">T-Shirts</li>
                    </a>
                  </ul>
                </details>

                <details className="nav__link_menu_content_item">
                  <summary className="nav__link_menu_content_category">
                    WOMAN
                  </summary>
                  <ul>
                    <a href="#">
                      <li className="category_list">Accessories</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Jackets & Coats</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Polos</li>
                    </a>
                    <a href="#">
                      <li className="category_list">T-Shirts</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Shirts</li>
                    </a>
                  </ul>
                </details>

                <details className="nav__link_menu_content_item">
                  <summary className="nav__link_menu_content_category">
                    KIDS
                  </summary>
                  <ul>
                    <a href="#">
                      <li className="category_list">Accessories</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Jackets & Coats</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Polos</li>
                    </a>
                    <a href="#">
                      <li className="category_list">T-Shirts</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Shirts</li>
                    </a>
                    <a href="#">
                      <li className="category_list">Bags</li>
                    </a>
                  </ul>
                </details>
              </div>
            </details>

            <a href="#" className="nav__link_account">
              <img src="/icon/Forma 1 (1).svg" alt="" />
            </a>
            <Link to="/cart" className="nav__link_cart">
              <img src="/icon/Forma 1 (3).svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
