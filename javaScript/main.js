/*-------------------------------------*\
    #Start Global
\*-------------------------------------*/
import createProductCard from "./createProductsCard.js";
import productsList from "./productsList.js";

// NOTE: 'element' should be a list /!\
const addEvent = (element, event, callBack) => {
  element.forEach((elem) => {
    elem.addEventListener(event, callBack);
  });
};

/*-------------------------------------*\
    #End Global
\*-------------------------------------*/

/*-------------------------------------*\
    #Start Toggle Menu
\*-------------------------------------*/
const hamburgerMenu = document.getElementById("toggle_menu");
const closeMenu = document.getElementById("close_menu");
const mainMenu = document.getElementById("main_nav");
const listItems = document.querySelectorAll(".list_item a");

// Open The Main__Menu
addEvent([hamburgerMenu], "click", () => {
  mainMenu.style.transform = "scaleY(1)";
});

// Close The Main__Menu
if (window.innerWidth <= 940) {
  addEvent([...listItems], "click", () => {
    mainMenu.style.transform = "scaleY(0)";
  });
}

// Close The Main__Menu
addEvent([closeMenu], "click", () => {
  mainMenu.style.transform = "scaleY(0)";
});

/*-------------------------------------*\
    #End Toggle Menu
\*-------------------------------------*/

/*-------------------------------------*\
    #Start HomePage Image
\*-------------------------------------*/
const homeContainer = document.getElementById("home__container");
const nextImage = document.getElementById("next-img");
const previousImage = document.getElementById("previous-img");
const lineSize = document.getElementById("line_size");
const currentNumber = document.getElementById("current_number");
let mainImageIndex = 1;

const setHomeImage = (imageNumber) => {
  const setHeight = (100 * imageNumber) / 6;
  homeContainer.style.backgroundImage = `url(../images/home/homePage-${imageNumber}.png)`;
  lineSize.style.height = `${setHeight}%`;
  currentNumber.textContent = `0${imageNumber}`;
};

addEvent([nextImage], "click", () => {
  if (mainImageIndex < 6) {
    mainImageIndex++;
  } else {
    mainImageIndex = 1;
  }
  setHomeImage(mainImageIndex);
});
addEvent([previousImage], "click", () => {
  if (mainImageIndex > 1) {
    mainImageIndex--;
  } else {
    mainImageIndex = 6;
  }
  setHomeImage(mainImageIndex);
});
/*-------------------------------------*\
    #End HomePage Image
\*-------------------------------------*/

/*-------------------------------------*\
    #Start Proucts Section
\*-------------------------------------*/
const productsContainer = document.getElementById("products_container");

productsList.forEach((product) => {
  productsContainer.append(createProductCard(product));
});
/*-------------------------------------*\
    #End Proucts Section
\*-------------------------------------*/

/*-------------------------------------*\
    #Start ToTop Button
\*-------------------------------------*/
const toTop = document.getElementById("to-top");

addEvent([toTop], "click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

addEvent([window], "scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.style.display = "grid";
  } else {
    toTop.style.display = "none";
  }
});
/*-------------------------------------*\
    #End ToTop Button
\*-------------------------------------*/

/*-------------------------------------*\
    #Start Search Section
\*-------------------------------------*/
const openSearch = document.getElementById("search");
const closeSearch = document.getElementById("close_search");
const searchBtn = document.getElementById("search_btn");
const searchSection = document.getElementById("search_section");

addEvent([openSearch], "click", () => {
  searchSection.style.transform = "scale(1)";
});

addEvent([closeSearch, searchBtn], "click", () => {
  searchSection.style.transform = "scale(0)";
});
/*-------------------------------------*\
    #End Search Section
\*-------------------------------------*/

/*-------------------------------------*\
    #Start Filter Products
\*-------------------------------------*/
const categoriesBtns = document.querySelectorAll(".product_btn");
let productListLength = 0;

const filterProducts = (category) => {
  productsContainer.innerHTML = "";
  if (category === "All") {
    productsList.forEach((product) => {
      productsContainer.append(createProductCard(product));
      productListLength++;
    });
  } else {
    productsList.forEach((product) => {
      if (product.category === category) {
        productsContainer.append(createProductCard(product));
        productListLength++;
      }
    });
  }
  if (!productListLength) {
    productsContainer.innerHTML =
      "<span></span><h3 class='empty'>No Products To Show Here</h3><span></span>";
  }
  productListLength = 0;
};

categoriesBtns.forEach((btn) => {
  addEvent([btn], "click", () => {
    categoriesBtns.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    filterProducts(btn.dataset.category);
  });
});
/*-------------------------------------*\
    #End Filter Products
\*-------------------------------------*/
