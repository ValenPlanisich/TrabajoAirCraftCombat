import MenuPrincipal from "./src/scenes/MenuPrincipal.js";
import SeleccionNivel from "./src/scenes/SeleccionNivel.js";
import Nivel1 from "./src/scenes/Nivel1.js";
import Nivel2 from "./src/scenes/Nivel2.js";
import Juego3 from "./src/scenes/Juego3.js";
import Preload from "./src/scenes/Preload.js";
import MenuControles from "./src/scenes/MenuControles.js";
import NivelInfinito from "./src/scenes/NivelInfinito.js"; 







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
  scene: [Preload,MenuPrincipal,Juego3,SeleccionNivel,Nivel1,Nivel2, NivelInfinito, MenuControles,],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

var enemigo;

