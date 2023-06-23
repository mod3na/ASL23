
//(window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)

var ClassGrafica;
var clas1;

window.onload = function(){
    ClassGrafica = document.querySelector('.grafica');
    clas1 = document.querySelector('.cls-1');

}
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    console.log(ClassGrafica)

    if(scroll >= 200){
        //clas1.style.setProperty("fill","transparent")
        ClassGrafica.style.setProperty("fill","#D89BED","important")
 
    }
    
});
