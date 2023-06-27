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
        this.menu = this.sound.add("MusicaMenu", {loop: true, volume: 1});
        this.menu.play();
        }
    
    
      
    
      update() {
      }
    }