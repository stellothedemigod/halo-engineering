let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar')



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

const MenuCont= document.querySelector(".logo__container");
const logoToggle = document.querySelector("#logo__btn");
const logoView = document.querySelector("#our_clients")

logoToggle.addEventListener('click', () => {

    logoView.style.display("inline-block");
})