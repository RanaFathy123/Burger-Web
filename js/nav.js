let nav_i = document.getElementById('nav');
let nav_left = document.querySelector('#nav .left');
let exit = document.querySelector('#nav .left .top p');

// show nav 
document.addEventListener('click', function (e){
    if(e.target.classList.contains('nav')){
        nav_left.style.left = '0px'   
    }
    else if(e.target.classList.contains('exit')){
        nav_left.style.left = '-290px'   
    }
})
