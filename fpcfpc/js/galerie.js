 var jsGModale = null;

 var closeModale = function () {

     jsGModale.parentNode.removeChild(jsGModale);
     jsGModale = null;


 }

 var openModale = function (url, legende) {

     jsGModale = document.createElement("div");

     jsGModale.style.width = "100%";
     jsGModale.style.height = "100vh";
     jsGModale.style.position = "fixed";
     jsGModale.style.top = "0";
     jsGModale.style.left = "0";
     jsGModale.style.zIndex = "1000";
     jsGModale.style.backgroundColor = "rgba(0,0,0,0.3)";
     jsGModale.style.display = "flex";
     jsGModale.style.justifyContent = "center";
     jsGModale.style.alignItems = "center";


     var jsGFigure = document.createElement("figure");
     jsGFigure.style.position = "relative";
     jsGFigure.style.fontSize = "0";
     jsGModale.appendChild(jsGFigure);

     var jsGImg = document.createElement("img");
     jsGImg.style.maxWidth = "80vw";
     jsGImg.style.maxHeight = "80vh";

     jsGImg.src = url;
     jsGFigure.appendChild(jsGImg);


     if (legende != null && legende != '') {

         jsGLegende = document.createElement("figcaption");
         jsGLegende.innerHTML = legende;
         jsGLegende.style.position = "absolute";
         jsGLegende.style.bottom = "0";
         jsGLegende.style.left = "0";
         jsGLegende.style.width = "100%";
         jsGLegende.style.boxSizing = "border-box";
         jsGLegende.style.padding = "10px";
         jsGLegende.style.color = "white";
         jsGLegende.style.background = "rgba(255,0,0,0.5)";
         jsGLegende.style.fontSize = "1rem";

         jsGFigure.appendChild(jsGLegende);

     }



     document.body.appendChild(jsGModale);


     jsGModale.addEventListener("click", closeModale);




 }

 var afficherImg = function (evt) {
     console.log("afficherImg");
     evt.preventDefault();
     //recuperation l'adresse de l'image à afficher
     var imgURL = evt.currentTarget.getAttribute("href");
     //récupération de la légende (title) de l'image
     var imgLegende = evt.currentTarget.querySelector("img").getAttribute("title");


     console.log(imgURL + " " + imgLegende);

     openModale(imgURL, imgLegende);




 }



 var jsGinit = function () {
     let liens = document.querySelectorAll("#jsGalerie a");

     for (let i = 0; i < liens.length; i++) {
         liens[i].addEventListener("click", afficherImg);
     }

 }




 addEventListener("DOMContentLoaded", jsGinit);
