const footer = document.querySelector("footer");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  scroll({ top: 0, behavior: "smooth" });
});

const intersectionObserver = new IntersectionObserver(
  ([{ isIntersecting }]) => {
    isIntersecting
      ? button.classList.add("show")
      : button.classList.remove("show");
  }
);
intersectionObserver.observe(footer);
