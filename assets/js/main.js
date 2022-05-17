const tabs = document.querySelectorAll("[data-target"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter__tab-active");
    });

    tab.classList.add("filter__tab-active");
  });
});

// DARK THEME

const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  return themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

  console.log(getCurrentTheme());
  console.log(getCurrentIcon());
});

// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, { delay: 500 });
sr.reveal(`.profile__profession`, { delay: 600 });
sr.reveal(`.profile__social`, { delay: 700 });
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile__buttons`, { delay: 800 });
sr.reveal(`.profile__content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 1000 });


const dropButton = document.querySelector('.dropdown__button');
const dropContent = document.querySelector('.dropdown__content')

dropButton.addEventListener('click', () => {
  dropContent.classList.toggle('active')
})
