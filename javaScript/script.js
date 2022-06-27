
// ---------------------------Nav-Bar----------------------------

const container = document.querySelector(".main-container");
let navbarBtn = document.querySelectorAll(".navbar-icon");

navbarBtn.forEach(item=>{
     item.addEventListener("click", ()=>{
      container.classList.toggle("change");
     })
})


// -------------------------Price-Cards------------------------
let navigationBtn = document.querySelectorAll(".navigation-btn");

navigationBtn.forEach(item => {
    item.addEventListener("click", () => {
      item.parentElement.parentElement.classList.toggle("change");
    })
  });