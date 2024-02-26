let elBurger =document.querySelector(".wrapper__btn-burger")
  let elList = document.querySelector(".header__list")
  let elListItem = document.querySelectorAll(".header__item")
  // let elburgeritem =document.querySelector(".wrapper__btn-burger div")

let navAnimation = ()=>{
  

  // ---Toggle ----

  elBurger.addEventListener("click",()=>{
    elList.classList.toggle("header__list-active")
    // elburgeritem.classList.toggle("toggle")
    elBurger.classList.toggle("toggle")
  })


}
navAnimation()
