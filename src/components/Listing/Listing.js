import "./desktop.scss";
import React from "react";

function titleFun(title) {
  if (title) {
    let str = "";
    if (title.length > 50) {
      str = title.substring(0, 50) + "...";
    } else {
      str = title;
    }
    return str;
  }
  return false;
}
function currencyPrice(price, currency) {
  if (price && currency) {
    if (currency === "USD") {
      return `$${price}`;
    } else if (currency === "EUR") {
      return `€${price}`;
    } else {
      return `${price} ${currency}`;
    }
  }
}

function levelClass(quantity) {
  if (quantity < 11) {
    return "level-low";
  } else if (quantity > 10 && quantity < 21) {
    return "level-medium";
  } else if (quantity > 20) {
    return "level-high";
  }
}

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => {
        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        return (
          <div key={listing_id} className="item">
            <div className="item-image">
              <a href={url}>
                <img
                  src={MainImage ? MainImage.url_570xN : null}
                  alt={titleFun(title) ? titleFun(title) : null}
                />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{titleFun(title)}</p>
              <p className="item-price">
                {currencyPrice(price, currency_code)}
              </p>
              <p className={`item-quantity ${levelClass(quantity)}`}>
                {quantity}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
