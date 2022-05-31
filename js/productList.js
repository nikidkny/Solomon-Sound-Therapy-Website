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
    //to check if we have the data
    console.log(data);
    handleData(data);
    //hide spinner when we get the posters
    let spinner = document.querySelector(".spinner");
    spinner.classList.add("hide");
  })
  .catch((e) => {
    "An error ocurred:", e.message;
  });

function handleData(sessions) {
  sessions.forEach((session) => {
    console.log(session);
    // 1. Grap the template
    const template = document.querySelector("template").content;

    // 2. Clone template
    const clone = template.cloneNode(true);
    // 4. Populated with data
    console.log(session._id);

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

    /*
    clone
      .querySelector("a")
      .setAttribute("href", `product.html?id=${soap._id}`);

    clone.querySelector(".producTitle").textContent = soap.productname;
    clone.querySelector(".desc").textContent = soap.productgroup;
    clone.querySelector(".price").textContent = soap.price;
    clone.querySelector("img").src = soap.img_url;
    clone.querySelector("img").alt = soap.productname;

    */

    // 5. Grap the parent
    const parent = document.querySelector("#product-list-container");
    // 6. Appent to the DOM
    parent.appendChild(clone);
  });
}
