const button = document.querySelector(".card-btn");
const infoCard = document.querySelector(".blog-card");

button.addEventListener("click",()=>{
    infoCard.classList.toggle("change") ? (button, firstElementChild.textContent = "Less"):(button, firstElementChild.textContent = "More");
});