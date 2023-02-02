// **** le plus important dans ce projet est l'utilisation de setInterval,clearinterval et la creation d'une fonction d'intervalle

// les variables 
var span, btn_start, btn_stop, t, ms, s, mn, h;  

// fonction pour initialiser les variables quand la page se charge
window.onload = function(){
  span = document.querySelectorAll(".time span");
  btn_start = document.querySelector("#start");
  btn_stop = document.querySelector("#stop");
  // intervalle t
  t;
  ms = 0; s=0; mn = 0; h = 0;

  // mettre en place les écouteurs d'événement pour les boutons
  btn_start.addEventListener("click", function(event) {
    if (event.target === btn_start) {
      start();
    }
  });

  btn_stop.addEventListener("click", function(event) {
    if (event.target === btn_stop) {
      stop();
    }
  });
};

// mettre en place le compteur
function update_chrono(){
  ms+=1;
  if(ms == 10){
    ms = 1;
    s+= 1;
  }
  if(s == 60){
    s=0;
    mn+=1;
  }
  if(mn == 60){
    mn = 0;
    h+=1;
  }

  // insertion des valeurs dans les span 
  // [0] permet de sélectionner le premier span
  span[0].innerHTML = h + "h";
  span[1].innerHTML = mn + "min";
  span[2].innerHTML = s + "s";
  span[3].innerHTML = ms + "ms";
}

// mettre en place la fonction du bouton start
function start(){
  // exécution de la fonction update_chrono toutes les 100ms
  t = setInterval(update_chrono,100);
  btn_start.disabled = true;
}

// stopper le chrono
function stop(){
  clearInterval(t); // suppression de l'intervalle t que nous avons créé
  btn_start.disabled = false;
}

// réinitialiser le chrono
function reset(){
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0; s=0; mn = 0; h = 0;
  // insérer les valeurs 0 dans les span
  span[0].innerHTML = h + "h";
  span[1].innerHTML = mn + "min";
  span[2].innerHTML = s + "s";
  span[3].innerHTML = ms + "ms";
}
