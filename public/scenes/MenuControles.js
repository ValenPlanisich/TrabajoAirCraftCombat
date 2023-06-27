export default class Controles extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("controles");
      }
      init() {

      }
    
      preload() {
    
      }
    
      create() {
        this.add.image(400, 300, "Fondocontroles")
        this.menu = this.sound.add("MusicaMenu", {loop: true, volume: 1});
        this.menu.play();
        this.volver = this.add.image(40,40, "BtnVolver").setScale().setInteractive();
        this.volver.setInteractive().on("pointerup", this.volverMenu, this);
        }
    
    
      
    
      update() {
      }
      volverMenu() {
        this.scene.start("menuprincipal") 
        this.menu.stop();
      }
    }