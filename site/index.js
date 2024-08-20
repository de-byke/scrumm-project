const closePopup = () => {
    const section = document.querySelector("section.popup-container");

    section.remove();
    

};


setTimeout(closePopup, 5000);

const btn = document.querySelector(".close-btn")

btn.addEventListener("click", closePopup)