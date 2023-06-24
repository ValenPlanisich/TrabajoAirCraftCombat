import MenuPrincipal from "./assets/scenes/MenuPrincipal.js";
import SeleccionNivel from "./assets/scenes/SeleccionNivel.js";
import SeleccionAvion from "./assets/scenes/SeleccionAvion.js";
import Gameplay from "./assets/scenes/Gameplay.js";
import Derrota from "./assets/scenes/Derrota.js";
import Victoria from "./assets/scenes/Victoria.js";
import Gameplay2 from "./assets/scenes/Gameplay2.js";
import Gameplay3 from "./assets/scenes/Gameplay3.js";
import Informacion from "./assets/scenes/Informacion.js";



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
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [MenuPrincipal,Informacion, Gameplay3, Gameplay2,Gameplay, SeleccionNivel, SeleccionAvion, Derrota, Victoria,],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

var enemigo;

