const boxes = document.querySelectorAll(".box");

document.addEventListener("scroll", () => {
  boxes.forEach((box) => {
    // This getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    // This is used to check if the box is in the viewport and what is the distance from the top of the viewport.
    // If the box is in the viewport, we add the show class to the box, otherwise we remove it.
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.6 ) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
