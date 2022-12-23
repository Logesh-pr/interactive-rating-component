let section_1 = document.querySelector(".section_1");
let section_2 = document.querySelector(".section_2");
let form = document.querySelector(".form");
let rating = document.querySelectorAll(".rating");
let submit_btn = document.querySelector(".submit_btn");
let rated = document.querySelector(".rated");
let showMessage = document.querySelector(".show_message");
let rating_container = document.querySelector(".rating_container");

form.addEventListener('submit' , (e) => {
    e.preventDefault();
})

let item = 0;

rating.forEach((btn)=>{
    btn.addEventListener("click" , () => {
        showMessage.classList.remove("error");
         item = btn.value;
    })
})

submit_btn.addEventListener("click", () => {
    if(item === 0){
        showMessage.classList.add("error");
        rating_container.classList.add("shake");
     }
    else if(item == 1 || item == 2 || item == 3 || item == 4 || item == 5){
       section_1.classList.add("hide");
       section_2.classList.remove("hide")
       rated.innerHTML = item;
     }
    else{
        console.log("error");
     }
})

