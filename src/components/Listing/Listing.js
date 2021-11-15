import "./desktop.scss";
import React from "react";
import PropTypes from "prop-types";

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
  let itemsArr = [];
  if (items.length > 0) {
    itemsArr = items;
  } else {
    itemsArr = null;
  }
  return (
    itemsArr && (
      <div className="item-list">
        {itemsArr.map((item) => {
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
            title && (
              <div key={listing_id} className="item">
                <div className="item-image">
                  <a href={url}>
                    <img
                      src={MainImage ? MainImage.url_570xN : null}
                      alt={title ? title : "foto"}
                    />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">
                    {title.length > 51
                      ? `${title.substring(0, 50)} ...`
                      : title}
                  </p>
                  <p className="item-price">
                    {currencyPrice(price, currency_code)}
                  </p>
                  <p className={`item-quantity ${levelClass(quantity)}`}>
                    {quantity}
                  </p>
                </div>
              </div>
            )
          );
        })}
      </div>
    )
  );
}

Listing.propTypes = {
  items: PropTypes.array,
};
Listing.defaultProps = {
  items: [],
};
export default Listing;
