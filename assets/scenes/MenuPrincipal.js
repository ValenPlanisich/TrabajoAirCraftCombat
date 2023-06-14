// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class ManuPrincipal extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("menuprincipal");
  }

  init() {

  }

  preload() {
    this.load.image("Fondo","assets/images/Fondo.png");
  }

  create() {
    this.add.image(400, 300, "Fondo");
  }


  

  update() {
  }
}
