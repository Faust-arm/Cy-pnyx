let signemultiplie = "X";
let multiplie = '*';
let addition = '+'
let associer = multiplie = signemultiplie;

let button = document.getElementById("commencer"); 
let sesmonresulta = document.getElementById("monresulta");
let levrairesulta = document.getElementById("vrairesulta").style.display = "none";
let buttoneffacer = document.getElementById("effacer");
//getComputedStyle(levrairesulta).display == "none"

let nombrebouton1 = Number(1); 


//Capture des bouton input des chiffres html dans js.
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

// Associer les boutons à l'input "monresulta"
b1.addEventListener('click', () =>{
b1.value = nombrebouton1;
    let recuperationb1 = b1.value;
    sesmonresulta.value = recuperationb1;
})

// generateur de nombres alléatoir sur les inputs n1 et n2 et addition de c'est nombres avec le boutton commencer.
button.addEventListener('click', () =>{
    let nombre1 = Math.round(Math.random()*99);
    let nombre2 = Math.round(Math.random()*99);
    document.getElementById("signe").value = addition;
    document.getElementById("n1").value = nombre1;
    document.getElementById("n2").value = nombre2;
    document.getElementById("vrairesulta").style.display = "none";
    document.getElementById("monresulta").style.backgroundColor = "white";
    document.getElementById('monresulta').value = '';
    document.getElementById("vrairesulta").value = '';
    //document.getElementById("monresulta").style.
})

buttoneffacer.addEventListener('click', () =>{
    
    document.getElementById("monresulta").value = "";
    document.getElementById("vrairesulta").style.display = "none";
}) 
    
// solution du resulta par rapport à celui de l'utilisateur, green pour vrai, red pour faux.
sesmonresulta.addEventListener('change', (e) =>{

    let addi1 = document.getElementById("n1").value ;
    let addi2 = document.getElementById("n2").value;
    let recuperation =  sesmonresulta = e.target.value;
    if( parseInt(addi1) + parseInt(addi2) == recuperation ){  
        document.getElementById("monresulta").style.backgroundColor = "green";
    //levrairesulta.style.backgroundColor = 'green';
}
    else{  
        document.getElementById("vrairesulta").style.display = "block";
       // levrairesulta.style.backgroundColor = 'red';
    }
    if( parseInt(addi1) + parseInt(addi2) != recuperation ){
        document.getElementById("monresulta").style.backgroundColor = "red";
    }
    else{ document.getElementById("vrairesulta").style.backgroundColor = "green";
     }
})
   // additions des nombres sur les inputs n1 et n2 avec résulta en appuiant sur le boutton resulte.
let resulte = document.getElementById("suivant");

resulte.addEventListener('click', () =>{
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
