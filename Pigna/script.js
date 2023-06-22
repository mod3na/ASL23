var pignaClass;

window.onload = function(){
    pignaClass = document.querySelector('#Livello_1 .cls-1');
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
});