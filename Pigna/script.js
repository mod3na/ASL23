
//

let clas1,ClassGrafica,ClassStampa,ClassInsegne,ClassPromo,ClassAllestimenti;
let headerClass;

window.onload = function(){
    ClassGrafica = document.getElementsByClassName('grafica');
    ClassStampa = document.getElementsByClassName('stampa');
    ClassInsegne = document.getElementsByClassName('insegne');
    ClassPromo = document.getElementsByClassName('promozionale');
    ClassAllestimenti = document.getElementsByClassName('allestimenti');
    
    clas1 = document.getElementsByClassName('cls-1');
    headerClass = document.getElementsByClassName("header")[0]

}
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    console.log(ClassGrafica)

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }
    
    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }

    if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top)){
        for(let i = 0; i<clas1.length;i++){
            clas1[i].style.setProperty("fill","transparent");
        }
        for(let i = 0; i<ClassGrafica.length; i++){
            ClassGrafica[i].style.setProperty("fill","#D89BED","important");
        }
    }
    
});
