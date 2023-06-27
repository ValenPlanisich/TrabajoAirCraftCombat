import MenuPrincipal from "./assets/scenes/MenuPrincipal.js";
import SeleccionNivel from "./assets/scenes/SeleccionNivel.js";
import Nivel1 from "./assets/scenes/Nivel1.js";
import Nivel2 from "./assets/scenes/Nivel2.js";
import Juego3 from "./assets/scenes/Juego3.js";
import Preload from "./assets/scenes/Preload.js";
import Derrota from "./assets/scenes/Derrota.js";

import Informacion from "./assets/scenes/Informacion.js";



import NivelInfinito from "./assets/scenes/NivelInfinito.js"; 







// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, 
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Preload,Juego3,MenuPrincipal,SeleccionNivel,Nivel1,Nivel2, NivelInfinito,Informacion, Derrota,],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

var enemigo;

