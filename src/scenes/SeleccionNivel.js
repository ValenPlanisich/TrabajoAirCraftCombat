export default class SeleccionNivel extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("seleccionnivel");
      }
      init() {

      }
    
      preload() {

    
      }
    
      create() {
        this.add.image(400, 300, "fondonivele");
        this.volver = this.add.image(40,40, "btnvolver").setScale().setInteractive();
        this.volver.setInteractive().on("pointerup", this.volverMenu, this);
        
        this.nivel1 = this.add.image(280,315, "btnnivel1").setScale().setInteractive();
        this.nivel1.setInteractive().on("pointerup", this.empezarNivel1, this);
       
        this.nivel2 = this.add.image(400,315, "btnnivel2").setScale().setInteractive();
        this.nivel2.setInteractive().on("pointerup", this.empezarNivel2, this);
       
        this.nivel3 = this.add.image(520,315, "btnnivel3").setScale().setInteractive();
        this.nivel3.setInteractive().on("pointerup", this.empezarNivel3, this);
        this.menu = this.sound.add("musicademenu", {loop: true, volume: 1});
        this.menu.play();

      }
    
    
      
    
      update() {
      }
      volverMenu(){
        this.menu.stop()
        this.scene.start("menuprincipal")

      }
      empezarNivel1(){  
        this.menu.stop()

        this.scene.start("nivel1")

      }
      empezarNivel2(){  
       this.menu.stop()
        this.scene.start("nivel2")
      }
      empezarNivel3(){
        this.menu.stop()

        this.scene.start("Juego3")

      }

    }