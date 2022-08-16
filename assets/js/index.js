const swiper = new Swiper(".swiper", {
  slidesPerView: "4",
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// label flutuante
const inputsForm = document.querySelectorAll(".field .input-group");
inputsForm.forEach(input => {
  const field = input.parentNode;
  input.addEventListener("focusin", () => {
    field.classList.add("active");
  });

  input.addEventListener("focusout", () => {
    if (input.value === "") {
      field.classList.remove("active");
    }
  });
});
