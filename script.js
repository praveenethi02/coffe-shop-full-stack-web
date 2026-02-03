let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{  //arrow function
      search.classList.toggle('active');  //togle use karanne hide wela tiyena ekak view karagnna hari view ekak hide karagnna hari
      navbar.classList.remove('active'); //navbar eka hide karanna
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
      navbar.classList.toggle('active');
      search.classList.remove('active'); //search eka hide karanna
}