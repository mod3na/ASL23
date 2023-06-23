
//(window.scrollY + document.querySelector('#Livello_1').getBoundingClientRect().top)

let clas1,ClassGrafica;
let headerClass;

window.onload = function(){
    ClassGrafica = document.getElementsByClassName('grafica');
    clas1 = document.getElementsByClassName('cls-1');
    headerClass = document.getElementsByClassName("header")[0]

}
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    console.log(ClassGrafica)

    if(scroll >= 200){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
        
 
    }
    
});
