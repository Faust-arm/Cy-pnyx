let signemultiplie = "X";
let multiplie = '*';
let addition = '+'
let associer = multiplie = signemultiplie;

// Variable de recupération des inputs text
let sesmonresulta = document.getElementById("monresulta");
let levrairesulta = document.getElementById("vrairesulta").style.display = "none";
//getComputedStyle(levrairesulta).display == "none"

// Variable des boutons Commencer, effacer, boutoncacher, suivant.
let button = document.getElementById("commencer"); 
let buttoneffacer = document.getElementById("effacer");
let resulte = document.getElementById("suivant");
   let btcacher = document.getElementById("boutoncacher");
   let divcacher = document.getElementsByClassName("diveffacerboutons")[0];





   let nombrechiffreegal = 1;
// Bouton pour enlever et afficher le clavier
  /* btcacher.addEventListener("click", () =>{
       if(getComputedStyle(divcacher).display != "none"){
           divcacher.style.display = "none";
        btcacher.innerHTML ="Afficher le clavier";
    }
           else{
               divcacher.style.display = "block";
               btcacher.innerHTML ="Enlever le clavier";
           }
   }) */

//Capture des bouton input des chiffres html dans js.
let bz =document.getElementById("bz");
let b1 =document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let effacer = document.getElementById("effacer");
let suivant = document.getElementById("suivant");

let boutons = [bz, b1, b2, b3, b4, b5, b6, b7, b8, b9];


// Associer les boutons à l'input "monresulta"
 boutons.forEach(bouton => { 

     bouton.addEventListener('click', () =>{ 
          sesmonresulta.value += bouton.value; 
     })
 })


 
 
  
 // generateur de nombres alléatoir sur les inputs n1 et n2 et addition de c'est nombres avec le boutton commencer.
 

 /* button.addEventListener('click', () =>{
    button.innerHTML = "Recommencer";
    let max = 0;
    if(nombrechiffreegal === 1){
        max = 9;
    }
    if(nombrechiffreegal === 2){
        max = 99;
    }
    let nombre1 = Math.round(Math.random()*max);
    let nombre2 = Math.round(Math.random()*max);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
    document.getElementById("vrairesulta").style.display = "none";
    document.getElementById("monresulta").style.backgroundColor = "rgb(43, 44, 44)";
    document.getElementById('monresulta').value = '';
    document.getElementById("vrairesulta").value = '';
})*/

let addunchiffre = document.getElementsByClassName("addunchiffre")[0];
let adddeuxchiffre = document.getElementsByClassName("adddeuxchiffre")[0];
let addtrioschiffre = document.getElementsByClassName("addtrioschiffre")[0];

addunchiffre.addEventListener('click', () =>{
    let max = 9;
nombrechiffreegal = 1;//truc de base
let nombre1 = Math.round(Math.random()*max);
    let nombre2 = Math.round(Math.random()*max);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
})

adddeuxchiffre.addEventListener('click', () =>{
    let max = 99;
nombrechiffreegal = 1;//truc de base
let nombre1 = Math.round(Math.random()*max);
    let nombre2 = Math.round(Math.random()*max);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
})

addtrioschiffre.addEventListener('click', () =>{
    let max = 999;
nombrechiffreegal = 1;//truc de base
let nombre1 = Math.round(Math.random()*max);
    let nombre2 = Math.round(Math.random()*max);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
})
  

// Bputon pour effacer le contenue de "monresulta" et display none à "vrairesulta".
buttoneffacer.addEventListener('click', () =>{
    document.getElementById("monresulta").style.backgroundColor = "rgb(43, 44, 44)";
    document.getElementById("monresulta").value =  document.getElementById("monresulta").value.slice(0,-1);
    document.getElementById("vrairesulta").style.display = "none";
}) 
    
// Détection de "monresulta" pour changer la valeur de n1 et n2 si "monresulta" et égal n1 +n2. 
sesmonresulta.addEventListener('keyup', (e) =>{

    
    let addi1 = document.getElementById("n1").value ;
    let addi2 = document.getElementById("n2").value;
    let recuperation = e.target.value;
    let sommeaddi = parseInt(addi1) + parseInt(addi2);
  // Si mon resultat est correct alors mettre de nouveaux nombre aléatoir sur n1 et n2
if( sommeaddi == recuperation){  

    let nombre1 = Math.round(Math.random()*99);
    let nombre2 = Math.round(Math.random()*99);
document.getElementById("n1").value = nombre1;
document.getElementById("n2").value = nombre2;
document.getElementById('monresulta').value = '';


}


 /*   else{  
        document.getElementById("vrairesulta").style.display = "block";
       
    }
    if( parseInt(addi1) + parseInt(addi2) != recuperation  ){
        document.getElementById("monresulta").style.backgroundColor = "rgba(218, 31, 31,0.8)";

       
    }
    else{ document.getElementById("vrairesulta").style.backgroundColor = "rgba(69, 129, 20, 0.7);";
     }*/
})

// additions des nombres sur les inputs n1 et n2 avec résulta en appuiant sur le boutton resulte.
/*resulte.addEventListener('click', () =>{
    let evt = document.createEvent("HTMLEvents");
     evt.initEvent("change", false, true);
    document.getElementById('monresulta').dispatchEvent(evt);
    let addi1 = document.getElementById("n1").value ;
    let addi2 = document.getElementById("n2").value;
    let sommeaddi = parseInt(addi1) + parseInt(addi2);
    document.getElementById("vrairesulta").value = sommeaddi;
})*/

let menu = document.getElementsByClassName('containairebardemenu')[0];
let fermermenu = document.getElementsByClassName('btfermer')[0];

menu.addEventListener("click", () => {

    document.getElementById("myNav").style.width = "75%";
   
})
   
fermermenu.addEventListener("click", () => {

    document.getElementById("myNav").style.width = "0%";
   
})
let lesclass = document.getElementsByClassName("overlay-content")[0];

lesclass.addEventListener("click", () => {

    document.getElementById("myNav").style.width = "0%";
   
})

document.querySelector("main").addEventListener("click", () => {

    document.getElementById("myNav").style.width = "0%";
   
})








//let textn1 = numb1.innerHTML = calcul;

/* 1 façon de faire
let nombre = numb1.addEventListener( 'click', () =>{
    calcul
})

let carre1 = document.getElementsByClassName('carre')[0];
    let color = "white";
    carre1.addEventListener('click', () =>{
 if(color == "white"){
                 color = "blue";
                 carre1.style.backgroundColor ="blue"}
                 else{
                     color ="white";
                     carre1.style.backgroundColor ="white";
                 }
             }
             ); 
              2 eme façon de faire*/
