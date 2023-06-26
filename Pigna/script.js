let clas1,ClassGrafica,ClassStampa,ClassInsegne,ClassPromo,ClassAllestimenti;
let headerClass;
let cursore;
let pignaClass;
let scroll

window.onload = function(){
    pignaClass = document.querySelector('.header svg');
    ClassGrafica = document.getElementsByClassName('grafica');
    ClassStampa = document.getElementsByClassName('stampa');
    ClassInsegne = document.getElementsByClassName('insegne');
    ClassPromo = document.getElementsByClassName('promozionale');
    ClassAllestimenti = document.getElementsByClassName('allestimenti');
    cursore = document.querySelector('#Livello_2')
    
    clas1 = document.getElementsByClassName('cls-1');
    headerClass = document.querySelector(".header")

    document.querySelector('.c1').style.setProperty("transform","translateY(300px)","important")
    document.querySelector('.c1').style.setProperty("z-index","999","important")
    document.querySelector('.c1').style.setProperty("position","absolute","important")
    document.querySelector('.c1').style.setProperty("fill","#red","important")


    window.addEventListener("scroll", (event) => {
        scroll = this.scrollY;
        console.log(scroll)
        console.log(ClassGrafica)

        if(scroll >= 200){
            headerClass.style.height = "80px"
        }else{
            headerClass.style.height = "150px"
        }

        if(scroll >= (window.scrollY + document.querySelector('#studio').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#studio').getBoundingClientRect().bottom)){

            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("fill","#9BBC06","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassGrafica.length; i++){
                ClassGrafica[i].style.setProperty("fill","#D89BED","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassStampa.length; i++){
                ClassStampa[i].style.setProperty("fill","#44BBA4","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassInsegne.length; i++){
                ClassInsegne[i].style.setProperty("fill","#FF6F59","important");
            }
        }
        
        if(scroll >= (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassPromo.length; i++){
                ClassPromo[i].style.setProperty("fill","#0B4F6C","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassAllestimenti.length; i++){
                ClassAllestimenti[i].style.setProperty("fill","#FFD400","important");
            }
        }


    
    });

/*
    document.addEventListener('mousemove', function(ev){
        cursore.style.transform = 'translateY('+(ev.clientY-33)+'px)';
        cursore.style.transform += 'translateX('+(ev.clientX-60)+'px)';            
    },false);
*/
    pignaClass.addEventListener("mouseover", () =>{
        for(let i = 0; i<clas1.length; i++){
            clas1[i].style.setProperty("fill","#9BBC06","important");
        }
        console.log("over")
        
    });
    pignaClass.addEventListener("mouseout", () =>{
        if(scroll >= (window.scrollY + document.querySelector('#studio').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#studio').getBoundingClientRect().bottom)){

            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("fill","#9BBC06","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassGrafica.length; i++){
                ClassGrafica[i].style.setProperty("fill","#D89BED","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassStampa.length; i++){
                ClassStampa[i].style.setProperty("fill","#44BBA4","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassInsegne.length; i++){
                ClassInsegne[i].style.setProperty("fill","#FF6F59","important");
            }
        }
        
        if(scroll >= (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassPromo.length; i++){
                ClassPromo[i].style.setProperty("fill","#0B4F6C","important");
            }
        }

        if(scroll >= (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().bottom)){
            for(let i = 0; i<clas1.length;i++){
                clas1[i].style.setProperty("fill","transparent");
            }
            for(let i = 0; i<ClassAllestimenti.length; i++){
                ClassAllestimenti[i].style.setProperty("fill","#FFD400","important");
            }
        }


    
    });





}
