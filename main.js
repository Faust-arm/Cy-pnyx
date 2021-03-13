let signemultiplie = "X";
let multiplie = '*';
let addition = '+'
let associer = multiplie = signemultiplie;

// Création des nombres.
let nombrebouton0 = Number(0)
let nombrebouton1 = Number(1); 
let nombrebouton2 = Number(2); 
let nombrebouton3 = Number(3); 
let nombrebouton4 = Number(4); 
let nombrebouton5 = Number(5); 
let nombrebouton6 = Number(6); 
let nombrebouton7 = Number(7);
let nombrebouton8 = Number(9); 
let nombrebouton9 = Number(8);  

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


// Bouton pour enlever et afficher le clavier
   btcacher.addEventListener("click", () =>{
       if(getComputedStyle(divcacher).display != "none"){
           divcacher.style.display = "none";
        btcacher.innerHTML ="Afficher le clavier";
    }
           else{
               divcacher.style.display = "block";
               btcacher.innerHTML ="Enlever le clavier";
           }
   })

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

// Associer les valeurs au boutons.
let tableauboutons = [
    b1.value = nombrebouton1,
     b2.value = nombrebouton2,
     b3.value = nombrebouton3,
     b4.value = nombrebouton4,
     b5.value = nombrebouton5,
     b6.value = nombrebouton6,
     b7.value = nombrebouton7,
     b8.value = nombrebouton8,
     b9.value = nombrebouton9,
     bz.value = nombrebouton0,];


// Associer les boutons à l'input "monresulta"
 boutons.forEach(bouton => { 

     bouton.addEventListener('click', () =>{ console.log(sesmonresulta, bouton.value); sesmonresulta.value += bouton.value; 
     })
 })


  
// generateur de nombres alléatoir sur les inputs n1 et n2 et addition de c'est nombres avec le boutton commencer.
button.addEventListener('click', () =>{
    button.innerHTML = "Recommencer";
    let nombre1 = Math.round(Math.random()*99);
    let nombre2 = Math.round(Math.random()*99);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
    document.getElementById("vrairesulta").style.display = "none";
    document.getElementById("monresulta").style.backgroundColor = "white";
    document.getElementById('monresulta').value = '';
    document.getElementById("vrairesulta").value = '';
})

// Bputon pour effacer le contenue de "monresulta" et display none à "vrairesulta".
buttoneffacer.addEventListener('click', () =>{
    document.getElementById("monresulta").style.backgroundColor = "white";
    document.getElementById("monresulta").value = "";
    document.getElementById("vrairesulta").style.display = "none";
}) 
    
// solution du resulta par rapport à celui de l'utilisateur, green pour vrai, red pour faux.
sesmonresulta.addEventListener('change', (e) =>{

    let addi1 = document.getElementById("n1").value ;
    let addi2 = document.getElementById("n2").value;
    let recuperation = e.target.value;
    
    if( parseInt(addi1) + parseInt(addi2) == recuperation){  
 document.getElementById("monresulta").style.backgroundColor = "green";}
    else{  
        document.getElementById("vrairesulta").style.display = "block";
       // levrairesulta.style.backgroundColor = 'red';
    }
    if( parseInt(addi1) + parseInt(addi2) != recuperation  ){
        document.getElementById("monresulta").style.backgroundColor = "red";
    }
    else{ document.getElementById("vrairesulta").style.backgroundColor = "green";
     }
})

// additions des nombres sur les inputs n1 et n2 avec résulta en appuiant sur le boutton resulte.
resulte.addEventListener('click', () =>{
    let evt = document.createEvent("HTMLEvents");
     evt.initEvent("change", false, true);
    document.getElementById('monresulta').dispatchEvent(evt);
    let addi1 = document.getElementById("n1").value ;
    let addi2 = document.getElementById("n2").value;
    let sommeaddi = parseInt(addi1) + parseInt(addi2);
    document.getElementById("vrairesulta").value = sommeaddi;
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
