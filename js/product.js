const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url =
  "https://karinavalens-35ec.restdb.io/rest/solomonsoundtherapy/" + id;

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
    //console.log(data);
    showProduct(data);
    let spinner = document.querySelector(".spinner");
    spinner.classList.add("hide");
  })
  .catch((e) => {
    "An error ocurred:", e.message;
  });

function showProduct(session) {
  var bookingOptions = document.querySelector(".book-session-container");
  bookingOptions.classList.remove("hide");

  document.querySelector(".session-image").src = session.SessionImage;
  document.querySelector(".single-product-title").textContent =
    session.TherapyName;
  document.querySelector(".single-product-session-description").textContent =
    session.LongDescription;
  document.querySelector(".product-price").textContent =
    session.SessionPrice + " kr.";
  document.querySelector(".product-duration").textContent =
    session.SessionLength;

  document.querySelector(".booking-summary-session-title").textContent =
    session.TherapyName;
  document.querySelector(".booking-summary-session-price").textContent =
    session.SessionPrice + " kr.";

  //booking - summary - session - title;
}
