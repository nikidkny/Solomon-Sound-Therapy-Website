const url = "https://karinavalens-35ec.restdb.io/rest/solomonsoundtherapy";

const options = {
  headers: {
    "x-apikey": "62838b6de8128861fcf3d3b6",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throwError(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //call function to populate correct data
    handleData(data);
    //hide spinner when we get the data
    let spinner = document.querySelector(".spinner");
    spinner.classList.add("hide");
  })
  .catch((e) => {
    "An error ocurred:", e.message;
  });

function handleData(sessions) {
  sessions.forEach((session) => {
    // 1. Grap the template
    const template = document.querySelector("#product-list-template").content;

    // 2. Clone template
    const clone = template.cloneNode(true);

    // 4. Populated with data
    clone.querySelector("img").src = session.SessionImage;
    clone.querySelector(".product-price").textContent =
      session.SessionPrice + " kr.";
    clone.querySelector(".product-duration").textContent =
      session.SessionLength;
    clone.querySelector(".product-title").textContent = session.TherapyName;
    clone.querySelector(".product-methodology").textContent =
      session.Methodology + " Session";
    clone.querySelector(".product-description").textContent =
      session.ShortDescription;
    clone.querySelector(
      ".book-now-button-small"
    ).innerHTML = `BOOK NOW <i class="fa-solid fa-chevron-right"></i>`;
    clone
      .querySelector(".book-now-button-small")
      .setAttribute("href", `product.html?id=${session._id}`);
    clone
      .querySelector("a")
      .setAttribute("href", `product.html?id=${session._id}`);

    // 5. Grap the parent
    const parent = document.querySelector("#product-list-container");
    // 6. Appent to the DOM
    parent.appendChild(clone);
  });
}
