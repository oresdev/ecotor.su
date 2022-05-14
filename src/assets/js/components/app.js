const images = document.querySelectorAll(".popups figure img");

let imageSource;

// get images src onclick
images.forEach((i) => {
  i.addEventListener("click", (e) => {
    imageSource = e.target.src;

    //run modal function
    imageModal(imageSource);
  });
});

//creating the modal
let imageModal = (src) => {
  const modal = document.createElement("div");

  modal.setAttribute("class", "modal");

  //add the modal to the main section or the parent element
  document.querySelector("main").append(modal);

  //adding image to modal
  const newImage = document.createElement("img");

  newImage.setAttribute("src", src);

  //close function
  modal.onclick = () => {
    modal.remove();
  };

  modal.append(newImage);
};

// show & hide outer navbar
const innerButton = document.querySelector(".inner__button");
const container = document.querySelector(".outer");

innerButton.onclick = function () {
  container.style.display = container.style.display == "block" ? "" : "block";
};
