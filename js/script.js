let pagesLink = document.querySelector(".pages .nav-link"),
  pageContainer = document.querySelector(".pages ul");

pagesLink.addEventListener("click", function () {
  pageContainer.classList.toggle("active");
});

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(
  (e) =>
    (e.onclick = function () {
      removeAllActiveClasses();
      e.classList.add("active");
      if (!e.parentElement.classList.contains("pages")) {
        pageContainer.classList.remove("active");
      }
    })
);

function removeAllActiveClasses() {
  navLinks.forEach((e) => e.classList.remove("active"));
}

let scrollBtn = document.querySelector("#scroll");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
});

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show Navbar In Small Devices

let navbar = document.querySelector(".navbar"),
  btn = document.querySelector(".toggle_btn");

btn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.querySelector(".main_header").style.overflow = "visible";
  this.children[0].classList.toggle("bx-x");
});

let showNote = document.querySelectorAll(".show_note"),
  note = document.querySelector(".note");

showNote.forEach((e) =>
  e.addEventListener("click", function () {
    removeAllActiveClassesFromNote();
    this.parentElement.querySelector(".note").classList.toggle("active");
    this.classList.toggle("active");
    this.querySelector("i").classList.toggle("active");
  })
);

function removeAllActiveClassesFromNote() {
  showNote.forEach((e) => {
    e.classList.remove("active");
    e.querySelector("i").classList.remove("active");
    e.parentElement.querySelector(".note").classList.remove("active");
  });
}

let sectionContainingNumbers = document.querySelector(".stat"),
  increasingOne = document.querySelector(".increase-1"),
  numToIncrease2 = document.querySelectorAll(".increase");

let started = false;

window.onscroll = function () {
  if (
    document.documentElement.scrollTop >= sectionContainingNumbers.offsetTop
  ) {
    if (!started) {
      let container1 = 0;
      let increase1 = setInterval(function () {
        container1++;
        increasingOne.textContent = container1 + "%";
        if (container1 === 93) clearInterval(increase1);
      }, 2000 / 93);

      numToIncrease2.forEach((e) => {
        let container = 0;
        let increase = setInterval(function () {
          container++;
          e.textContent = container;
          if (container == e.dataset.goal) clearInterval(increase);
        }, 2000 / e.dataset.goal);
      });
    }
    started = true;
  }
};
