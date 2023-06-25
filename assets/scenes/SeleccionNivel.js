export default class SeleccionNivel extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("SeleccionNivel");
      }
      init() {

      }
    
      preload() {
        this.load.image("FondoNivele","assets/Images/Elecciondenivel.png");
        this.load.image("BtnNivel1","assets/Images/BotonNivel1.png");
        this.load.image("BtnNivel2","assets/Images/BotonNivel2.png");
        this.load.image("BtnNivel3","assets/Images/BotonNivel3.png");

    
      }
    
      create() {
        this.add.image(400, 300, "FondoNivele");
      }
    
    
      
    
      update() {
      }
    }