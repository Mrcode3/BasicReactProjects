import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { id, img, title, desc, price } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
                <p className="item-text">{desc}</p>
              </header>
            </div>
          </article>
        );
      })}
      {/* {menuItems.map((item) => {
        const { id, img, title, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
                <p className="item-text">{desc}</p>
              </header>
            </div>
          </article>
        );
      })} */}
    </div>
  );
};

export default Menu;
