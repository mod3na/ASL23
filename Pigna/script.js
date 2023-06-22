
let pignaClass;
let provaPigna
window.onload = function(){
    pignaClass = document.querySelector('#Livello_1 .cls-1');
    provaPigna = document.querySelector('Livello1 .cls2 1');
}
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)

    if(scroll >= (window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)){
        pignaClass.style.fill = 'red' 
    }else if(scroll < (window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)){
        pignaClass.style.fill = '#93c01f'
    }
    console.log(pignaClass.style.fill)
    
    provaPigna.style.transform = "translateX(30px)";


});
