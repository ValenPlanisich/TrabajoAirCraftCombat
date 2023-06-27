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
        this.load.image("BtnVolver","assets/Images/BotonVolver.png");
    
      }
    
      create() {
        this.add.image(400, 300, "FondoNivele");
        this.volver = this.add.image(40,40, "BtnVolver").setScale().setInteractive();
        this.volver.setInteractive().on("pointerup", this.volverMenu, this);
        
        this.nivel1 = this.add.image(230,330, "BtnNivel1").setScale().setInteractive();
        this.nivel1.setInteractive().on("pointerup", this.empezarNivel1, this);
       
        this.nivel2 = this.add.image(400,330, "BtnNivel2").setScale().setInteractive();
        this.nivel2.setInteractive().on("pointerup", this.empezarNivel2, this);
       
        this.nivel3 = this.add.image(570,330, "BtnNivel3").setScale().setInteractive();
        this.nivel3.setInteractive().on("pointerup", this.empezarNivel3, this);

      }
    
    
      
    
      update() {
      }
      volverMenu(){
        this.scene.start("menuprincipal")
      }
      empezarNivel1(){  
        this.scene.start("nivel1")

      }
      empezarNivel2(){  
        this.scene.start("nivel2")
      }
      empezarNivel3(){
        this.scene.start("Juego3")

      }

    }