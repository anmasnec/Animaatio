"use strict";

window.onload =function() {
    let body = document.getElementById("body");
    let canvas = document.getElementById('canvas');

    lisaaPalkit(body, 10);

    let canvas1 = document.getElementById('canvas1');
    let canvas2 = document.getElementById('canvas2');
    let canvas3 = document.getElementById('canvas3');
    let canvas4 = document.getElementById('canvas4');

    let img = document.getElementById('pöllö');
    img.setAttribute('alt', 'pöllö');

    let ctx1 = canvas1.getContext('2d');
    let ctx2 = canvas2.getContext('2d');
    let ctx3 = canvas3.getContext('2d');
    let ctx4 = canvas4.getContext('2d');
    

 //Piirretään kuva neljäsosa kerrallaan
   ctx1.drawImage(img, 0, 0, 282, 276, 0, 0, 125, 125);
   ctx2.drawImage(img, 282, 0, 282, 276, 0, 0, 125, 125);
   ctx3.drawImage(img, 0, 276, 282, 276, 0, 0, 125, 125);
   ctx4.drawImage(img, 282, 276, 282, 276, 0, 0, 125, 125);

};


//Lisää palkin
function lisaaPalkki (body, viive, lukuMaara) {

     let palkki = document.getElementsByClassName("palkki")[0];
    
       let i;
       for(i = 0; i < lukuMaara; i++) {
        palkki.style.animationDelay = viive +'s';
         document.body.appendChild(palkki.cloneNode(true));
      }
      body.appendChild(palkki);
  }
  
  
  //Lisätään palkkeja annetun lukumäärän verran. Jokaiselle viive
  function lisaaPalkit(body, lukuMaara) {
      let i;
      for(i = 0; i < lukuMaara; i++) {
          lisaaPalkki(body, i * 0.08, lukuMaara);
      }
  }

