var burgerIcon = document.querySelector(".icon");
burgerIcon.addEventListener("click", handleClick);

var closeNavIcon = document.querySelector(".close-nav");
closeNavIcon.addEventListener("click", handleClick);

function handleClick() {
  var mobileNavbar = document.querySelector(".mobile-nav");
  if (mobileNavbar.className === "mobile-nav") {
    mobileNavbar.className += " show-nav";
  } else {
    mobileNavbar.className = "mobile-nav";
  }
}

function handleNavData(sessions) {
  // var services = [];
  sessions.forEach((session) => {
    // 1. Grap the template
    const servicesTemplate = document.querySelector("#services-template").content;

    // 2. Clone template
    const serviceClone = servicesTemplate.cloneNode(true);
    // 4. Populated with data
    console.log(session.TherapyName);
    serviceClone.querySelector("li").textContent = session.TherapyName;

    // 5. Grap the parent
    const servicesParent = document.querySelector(".services-nav-dropdown");
    // 6. Appent to the DOM
    servicesParent.appendChild(serviceClone);
  });
}

var servicesLink = document.querySelector(".services-dropdown-link");
servicesLink.addEventListener("click", toggleServices);

function toggleServices() {
  var servicesDropdown = document.querySelector(".services-nav-dropdown");
  var chevronDown = document.querySelector(".fa-chevron-down");
  var chevronUp = document.querySelector(".fa-chevron-up");

  if (chevronDown.className === "fa-solid fa-chevron-down") {
    chevronDown.classList.add("hide-chevron");
    chevronUp.classList.add("show-chevron");
  } else {
    chevronDown.classList.remove("hide-chevron");
    chevronUp.classList.remove("show-chevron");
  }

  if (servicesDropdown.className === "services-nav-dropdown") {
    servicesDropdown.className += " show-dropdown";
  } else {
    servicesDropdown.className = "services-nav-dropdown";
  }
}
