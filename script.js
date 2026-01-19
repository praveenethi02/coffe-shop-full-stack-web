let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{  //arrow function
      search.classList.toggle('active');  //togle use karanne hide wela tiyena ekak view karagnna hari view ekak hide karagnna hari
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
      navbar.classList.toggle('active');
}