import "./style.css";


const buttonFaq = document.querySelectorAll(".faq-item__btn");
const form = document.querySelector(".contact-form");
const input = document.querySelector(".contact-input");
const button = document.querySelector(".contact-btn");
const errorIcon = form.querySelector(".error-img");
const errorText = form.querySelector(".error-text");

const buttonFeatures = document.querySelectorAll(".features-button");

const image = document.getElementById("feature-image");
const title = document.getElementById("feature-title");
const text = document.getElementById("feature-text");

const features = [
  {
    img: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  {
    img: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
    img: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }
];

buttonFeatures.forEach((button, index) => {
  button.addEventListener("click", () => {

    // активная кнопка
    buttonFeatures.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // меняем контент
    image.src = features[index].img;
    title.textContent = features[index].title;
    text.textContent = features[index].text;
    console.log(image.src);
    
  });
});


buttonFaq.forEach(button => {
  button.addEventListener("click", () => {

    const item = button.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");

    document.querySelectorAll(".faq-answer").forEach(el => {
      if (el !== answer) el.classList.add("hidden");
    });

    answer.classList.toggle("hidden");

  });
});
// проверка емейла и сообщение об ошибке

button.addEventListener("click", function (e) {
  e.preventDefault();

  const email = input.value.trim();
console.log(email);

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    form.classList.add("error");
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  } else {
     form.reset();
    form.classList.remove("error");
      errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
    console.log(errorIcon);
      } 
});
window.addEventListener("load", () => {
  form.reset();
  form.classList.remove("error");
  errorIcon.classList.add("hidden");
  errorText.classList.add("hidden");
});