
export default class Gameplay extends Phaser.Scene {
    constructor() {
      super("gameplay");
      this.vidas = 3;
    }
  
    preload() {
      this.load.image("FondoMon", "assets/Images/FondoMon.png");
      this.load.image("Avion", "assets/Images/Avion.png");
      this.load.image("Enemigo", "assets/Images/Enemigo.png");
    }
  
    create() {
     this.add.image(400, 300, "FondoMon");
     this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
     this.avion.setCollideWorldBounds(true);
     this.avion.setSize(90, 30)
     this.cursors = this.input.keyboard.createCursorKeys();
     this.enemigo = this.physics.add.group();

        
      
        // Crear enemigos individuales y establecer la escala
     
      
     this.vidasText = this.add.text(10, 10, `Vidas: ${this.vidas}`, { fontSize: '24px', fill: '#ffffff' });
      
     this.physics.add.overlap(this.avion, this.enemigo, this.avionEnemigoColision, null, this);
     
     
     this.time.addEvent({
      delay: 500,
      callback: this.addAvion,
      callbackScope: this,
      loop: true,
    });



      }
  
    update() {
      if (this.cursors.right.isDown) {
        this.avion.setVelocityX(400);
      } else if (this.cursors.left.isDown) {
        this.avion.setVelocityX(-400);
      } else {
        this.avion.setVelocityX(0);
      }
  
      if (this.cursors.up.isDown) {
        this.avion.setVelocityY(-400);
      } else if (this.cursors.down.isDown) {
        this.avion.setVelocityY(400);
      } else {
        this.avion.setVelocityY(0);
      }
    }
  
    avionEnemigoColision(avion, enemigo) {
      this.vidas--;
      this.vidasText.setText(`Vidas: ${this.vidas}`);
      enemigo.destroy();
      if (this.vidas === 0) {
        this.gameOver();
      }

    }
  
    gameOver() {
      this.time.delayedCall(1000, () => {
        this.scene.start("Derrota");
      }, [], this);
    }

    addAvion() {
      const randomY = Phaser.Math.RND.between(100, 500); // Genera una coordenada Y aleatoria
      const randomX = Phaser.Math.Between(800, 1600); // Genera una coordenada X aleatoria en el lado derecho
      const enemigo = this.physics.add.sprite(randomX, randomY, "Enemigo").setScale(1.2); // Crea un nuevo enemigo en las coordenadas generadas
      this.enemigo.add(enemigo);
      this.enemigo.setVelocityX(-500)

        }
  }
