let clas1,ClassGrafica,ClassStampa,ClassInsegne,ClassPromo,ClassAllestimenti;
let headerClass;
let pignaClass;
let scroll


function logoTranslate(){
    document.querySelector('.c1').style.translate = "80%"
    document.querySelector('.c2').style.translate = "100%"
    document.querySelector('.c3').style.translate = "70%"
    document.querySelector('.c4').style.translate = "67%"
    document.querySelector('.c5').style.translate = "84%"
    document.querySelector('.c6').style.translate = "90%"
    document.querySelector('.c7').style.translate = "68%"
    document.querySelector('.c8').style.translate = "71%"
    document.querySelector('.c9').style.translate = "79%"
    document.querySelector('.c10').style.translate = "88%"
    document.querySelector('.c11').style.translate = "85%"
    document.querySelector('.c12').style.translate = "98%"
    document.querySelector('.c13').style.translate = "65%"
    document.querySelector('.c14').style.translate = "92%"
    document.querySelector('.c15').style.translate = "99%"
    document.querySelector('.c16').style.translate = "66%"
    document.querySelector('.c17').style.translate = "68%"
    document.querySelector('.c18').style.translate = "66%"
    document.querySelector('.c19').style.translate = "72%"
    document.querySelector('.c20').style.translate = "75%"
    document.querySelector('.c21').style.translate = "74%"
    document.querySelector('.c22').style.translate = "79%"
    document.querySelector('.c23').style.translate = "59%"
    document.querySelector('.c24').style.translate = "87%"
    document.querySelector('.c25').style.translate = "91%"
}
function logoReset(){
    document.querySelector('.c1').style.translate = "none"
    document.querySelector('.c2').style.translate = "none"
    document.querySelector('.c3').style.translate = "none"
    document.querySelector('.c4').style.translate = "none"
    document.querySelector('.c5').style.translate = "none"
    document.querySelector('.c6').style.translate = "none"
    document.querySelector('.c7').style.translate = "none"
    document.querySelector('.c8').style.translate = "none"
    document.querySelector('.c9').style.translate = "none"
    document.querySelector('.c10').style.translate = "none"
    document.querySelector('.c11').style.translate = "none"
    document.querySelector('.c12').style.translate = "none"
    document.querySelector('.c13').style.translate = "none"
    document.querySelector('.c14').style.translate = "none"
    document.querySelector('.c15').style.translate = "none"
    document.querySelector('.c16').style.translate = "none"
    document.querySelector('.c17').style.translate = "none"
    document.querySelector('.c18').style.translate = "none"
    document.querySelector('.c19').style.translate = "none"
    document.querySelector('.c20').style.translate = "none"
    document.querySelector('.c21').style.translate = "none"
    document.querySelector('.c22').style.translate = "none"
    document.querySelector('.c23').style.translate = "none"
    document.querySelector('.c24').style.translate = "none"
    document.querySelector('.c25').style.translate = "none"
}
logoTranslate()
window.onload = function(){
    pignaClass = document.querySelector('.header svg');
    ClassGrafica = document.getElementsByClassName('grafica');
    ClassStampa = document.getElementsByClassName('stampa');
    ClassInsegne = document.getElementsByClassName('insegne');
    ClassPromo = document.getElementsByClassName('promozionale');
    ClassAllestimenti = document.getElementsByClassName('allestimenti');

    clas1 = document.getElementsByClassName('cls-1');
    headerClass = document.querySelector(".header")

    window.addEventListener("scroll", (event) => {
        scroll = this.scrollY;
        console.log(scroll)
        console.log(ClassGrafica)

        if(scroll >= 40){
            logoReset()
            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("transform","scale(100%)", "important");
            }
            headerClass.style.height = "80px"
        }else{
            logoTranslate()
            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("transform","scale(70%)" , "important");
            }
            headerClass.style.height = "150px"
        }

        if(scroll >= (window.scrollY + document.querySelector('#studio').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#studio').getBoundingClientRect().bottom)){

            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("fill","#9BBC06");
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
*/  for(let i = 0; i< clas1.length;i++){
        clas1[i].addEventListener("mouseover", () =>{
            for(let i = 0; i<clas1.length; i++){
                clas1[i].style.setProperty("fill","#9BBC06");
            }
            console.log("over")

        });
    }
    for (let i = 0; i < clas1.length; i++) {
        pignaClass.addEventListener("mouseout", () => {
            if (scroll >= (window.scrollY + document.querySelector('#studio').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#studio').getBoundingClientRect().bottom)) {

                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "#9BBC06", "important");
                }
            }

            if (scroll >= (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#grafica').getBoundingClientRect().bottom)) {
                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "transparent");
                }
                for (let i = 0; i < ClassGrafica.length; i++) {
                    ClassGrafica[i].style.setProperty("fill", "#D89BED", "important");
                }
            }

            if (scroll >= (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#stampa').getBoundingClientRect().bottom)) {
                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "transparent");
                }
                for (let i = 0; i < ClassStampa.length; i++) {
                    ClassStampa[i].style.setProperty("fill", "#44BBA4", "important");
                }
            }

            if (scroll >= (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#insegne').getBoundingClientRect().bottom)) {
                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "transparent");
                }
                for (let i = 0; i < ClassInsegne.length; i++) {
                    ClassInsegne[i].style.setProperty("fill", "#FF6F59", "important");
                }
            }

            if (scroll >= (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#promozionale').getBoundingClientRect().bottom)) {
                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "transparent");
                }
                for (let i = 0; i < ClassPromo.length; i++) {
                    ClassPromo[i].style.setProperty("fill", "#0B4F6C", "important");
                }
            }

            if (scroll >= (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().top) && scroll < (window.scrollY + document.querySelector('#allestimenti').getBoundingClientRect().bottom)) {
                for (let i = 0; i < clas1.length; i++) {
                    clas1[i].style.setProperty("fill", "transparent");
                }
                for (let i = 0; i < ClassAllestimenti.length; i++) {
                    ClassAllestimenti[i].style.setProperty("fill", "#FFD400", "important");
                }
            }
        });
    }
}
