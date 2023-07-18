export default class MenuControles extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("menucontroles");
      }
      create() {
        this.add.image(400, 300, "fondocontroles")
        this.menu = this.sound.add("musicademenu", {loop: true, volume: 1});
        this.menu.play();
        this.volver = this.add.image(40,40, "btnvolver").setScale().setInteractive();
        this.volver.setInteractive().on("pointerup", this.volverMenu, this);
        }
      volverMenu() {
        this.scene.start("menuprincipal") 
        this.menu.stop();
      }
    }