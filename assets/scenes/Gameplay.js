export default class Gameplay extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("gameplay");
      }
      init() {

      }
    
      preload() {
        this.load.image("Fondo","assets/Images/Fondo.png");
        this.load.image("Avion","assets/Images/Avion.png");
        this.load.image("Enemigo","assets/Images/Enemigo.png");
        this.load.image("Bala","assets/Images/Bala.png");

      }
    
      create() {
        this.add.image(400, 300, "Fondo");
        this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
        
        this.enemigo = this.physics.add.sprite(300, 300, "Enemigo").setScale(1.2);
        this.cursors = this.input.keyboard.createCursorKeys();
        }
     
     
   update() {
       if (this.cursors.right.isDown) {
        this.avion.setVelocityX(400);
        }
        else if (this.cursors.left.isDown) {
        this.avion.setVelocityX(-400);
        }
        else {
        this.avion.setVelocityX(0);
        }
        
        if (this.cursors.up.isDown) {
        this.avion.setVelocityY(-400);
        }
        else if (this.cursors.down.isDown) {
        this.avion.setVelocityY(400);
        }
        else {
        this.avion.setVelocityY(0);
        }









      }
    }




    
