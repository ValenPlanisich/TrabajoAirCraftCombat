import MenuPrincipal from "./assets/scenes/MenuPrincipal.js";
import SeleccionNivel from "./assets/scenes/SeleccionNivel.js";
import SeleccionAvion from "./assets/scenes/SeleccionAvion.js";
import Gameplay from "./assets/scenes/Gameplay.js";

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
  scene: [Gameplay, MenuPrincipal, SeleccionNivel, SeleccionAvion, ],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);

