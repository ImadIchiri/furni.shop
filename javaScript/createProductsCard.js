const createProductCard = (product) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const shoppingCard = document.createElement("i");
  shoppingCard.className = "fa-solid fa-cart-shopping shopping_icon";

  const title = document.createElement("h3");
  title.className = "title";

  const productTitle = document.createTextNode(`${product.title}`);
  title.append(productTitle);

  const priceHolder = document.createElement("div");
  priceHolder.className = "price";

  const newPrice = document.createElement("span");
  newPrice.className = "new_price";
  const newPriceValue = document.createTextNode(`$${product.newPrice}`);
  newPrice.append(newPriceValue);
  priceHolder.append(newPrice);

  const oldPrice = document.createElement("span");
  oldPrice.className = "old_price";
  const oldPriceValue = document.createTextNode(`$${product.oldPrice}`);
  oldPrice.append(oldPriceValue);
  priceHolder.append(oldPrice);

  const imageHolder = document.createElement("div");
  imageHolder.className = "image";

  const productImage = document.createElement("img");
  productImage.setAttribute("src", `${product.image}`);
  productImage.setAttribute("alt", `${product.altImage}`);
  imageHolder.append(productImage);

  cardDiv.append(shoppingCard);
  cardDiv.append(title);
  cardDiv.append(priceHolder);
  cardDiv.append(imageHolder);

  return cardDiv;
};

export default createProductCard;
