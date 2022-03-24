class Main {
  constructor() {
    this._Init();
  }

  _Init() {
    const brandsTitle = document.querySelector(".brands_title");
    const brandsContainer = document.querySelector(".brands_container");
    brandsTitle.addEventListener("click", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 1000) {
        brandsTitle.classList.toggle("open");
        brandsContainer.classList.toggle("open");
      }
    });
  }
}

let _APP = null;

window.addEventListener("DOMContentLoaded", () => {
  _APP = new Main();
});
