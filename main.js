window.onload = function(){
     function random_bg_Color(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var color = "rgb(" + x + "," + y + "," + z + ")";

    }
  console.log (random_bg_Color());
/*    
let jeudeCartes = [];    
    var bgColor;
for(i=0; i<=52; i++){
    let jeudeCartes = [];  
    let carteJeu = document.createElement('img');
    carteJeu.src = "https://via.placeholder.com/150/"+bgColor;
    carteJeu.setAttribute("class","style");
    let contenCartes = document.querySelector(".container");
    contenCartes.appendChild(carteJeu);
    jeudeCartes.push(i);
    console.log(jeudeCartes);
    
}
}
*/

    for(i=0;i<52;i++){
    let carteJeu = document.createElement('img');
    let contenCartes = document.querySelector(".container");
    contenCartes.appendChild(carteJeu);
    carteJeu.src= "https://via.placeholder.com/150/";
    carteJeu.setAttribute("class","style");
    
}
    function changeColor(){
    var imageColor = document.querySelectorAll("img");
    console.log(imageColor);
    // for (i=0;i<52;i++){
    
    // imageColor[i].addEventListener("click",function(event){
    // alert("les images sont cliquables");
    // imageColor[i].src= "https://via.placeholder.com/150/";

    


    }


}




/*
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    Cartes.style.background= bgColor;


    var carteNumero = {
        typeCarte: ["coeur","trèfle","pique","carreau"],
        NombreType: [1,2,3,4,5,6,7,8,9,10],
    }


    var cartePersonnes = {
        Nomcarte : ["Roi","Dame","Valet"],
        typeCarte: ["carreau", "coeur", "trèfle", "pique"],
    }


    for( elt in carteNumero){
        console.log(carteNumero.NombreType+carteNumero.typeCarte);
    }


   /* function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        jeudeCartes.style.background= bgColor;

}
random_bg_color();
}
*/


 /*  for (i=0;i<4; i++){
        let carteRoifinal = document.createElement('img');
        carteRoitext= "?text=Roi";
        carteRoifinal.src = "https://via.placeholder.com/150"+ carteRoitext;
        carteRoifinal.setAttribute("class","roi");
        let contenCartes = document.querySelector(".container");
        contenCartes.appendChild(carteRoifinal);

    }
*/

