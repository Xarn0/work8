let burger = document.querySelector('.burger'),
burgerContent = document.querySelector('.burger__content'),
header__list = document.querySelectorAll('.header__navItem');


header__list.forEach(item=>{
    burgerContent.innerHTML += item.outerHTML
})

burger.addEventListener('click', ()=>{
        if(burgerContent.style.display == "block"){
            burgerContent.style.display = 'none';
        }else{
            burgerContent.style.display = 'block'
        }
})
