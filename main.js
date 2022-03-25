class Main {
  constructor(data) {
    this._data = data;
    this._template = document.querySelector("template").content;
    this._gallery = document.querySelector(".product-list");
    this._Init();
  }

  _Init() {
    const brandsTitle = document.querySelector(".brands_title");
    const brandsContainer = document.querySelector(".brands_container");
    brandsTitle.addEventListener("click", () => {
      if (window.innerWidth < 1000) {
        brandsTitle.classList.toggle("open");
        brandsContainer.classList.toggle("open");
      }
    });

    this._data.forEach((entry) => this._DisplayEntry(entry));
  }
  _DisplayEntry(entry) {
    const colours = entry.bike_colours.split(",");
    const clone = this._template.cloneNode(true);
    const colourHolder = clone.querySelector(".card_colours");
    clone.querySelector(".card_brand").textContent =
      entry._embedded["wp:term"][0][1]["name"];
    clone.querySelector(".card_title").textContent = entry.title.rendered;
    clone.querySelector(".card_price").textContent = `$${entry.bike_price}`;
    if (colours.length > 1) {
      colours.forEach((colour) => {
        colourHolder.innerHTML += this._DisplayColors(colour);
      });
    } else {
      colourHolder.textContent = "N/A";
    }
    clone.querySelector(".card_stock").textContent = entry.in_stock;
    clone.querySelector("img").src =
      entry._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;
    clone.querySelector("img").alt =
      entry._embedded["wp:featuredmedia"][0].alt_text;

    this._gallery.append(clone);
  }

  _DisplayColors(colour) {
    return `<div style="background-color: ${colour}" class="card_colour-box"></div>`;
  }
}

let _APP = null;

window.addEventListener("DOMContentLoaded", loadData);
async function loadData() {
  const response = await fetch(
    "https://lucaszago.dk/wp-childtheme/wp-json/wp/v2/bike?_embed"
  );
  const data = await response.json();

  _APP = new Main(data);
}
