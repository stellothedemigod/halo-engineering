let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar')



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}



function display() {
    document.getElementById('our_clients').style.display="flex"
    document.getElementById('logo__btn').style.display="block"
}

function hide () {
    document.getElementById('our_clients').style.display= "none"
    document.getElementById('hide').style.display="block"
}