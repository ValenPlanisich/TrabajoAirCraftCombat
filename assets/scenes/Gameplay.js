export default class Gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
    this.vidas = 3;
  }

  preload() {
    this.load.image("FondoMon", "assets/Images/FondoMon.png");
    this.load.image("Avion", "assets/Images/Avion.png");
    this.load.image("Enemigo", "assets/Images/Enemigo.png");
    this.load.image("Bala", "assets/Images/Bala.png");
  }

  create() {
    this.add.image(400, 300, "FondoMon");
    this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
    this.avion.setCollideWorldBounds(true);
    this.avion.setSize(90, 30)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.enemigo = this.physics.add.group();
    this.bala = this.physics.add.group();
    
    this.vidasText = this.add.text(650, 10, `Vidas: ${this.vidas}`, { fontSize: '24px', fill: '#ffffff' });

    this.physics.add.overlap(this.avion, this.enemigo, this.avionEnemigoColision, null, this);
    this.physics.add.overlap(this.bala, this.enemigo, this.balaEnemigoColision, null, this);

    this.time.addEvent({
      delay: 500,
      callback: this.addAvion,
      callbackScope: this,
      loop: true,
    });
    this.lastEnemyY = 0;

    this.input.keyboard.on('keydown-SPACE', this.disparar, this);
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

  balaEnemigoColision(bala, enemigo) {
    bala.destroy();
    enemigo.destroy();
  }

  gameOver() {
    this.time.delayedCall(1000, () => {
      this.scene.start("Derrota");
    }, [], this);
  }

  disparar() {
    const bala = this.physics.add.sprite(this.avion.x + 50, this.avion.y, "Bala");
    this.bala.add(bala);
    bala.setVelocityX(800); 
    bala.setSize(90, 40); 
    bala.setScale(0.3)
  } 

  addAvion() { 
    const randomY = Phaser.Math.RND.between(100, 500);
    const randomX = Phaser.Math.Between(800, 1600);
    const enemigo = this.physics.add.sprite(randomX, randomY, "Enemigo").setScale(1.2);
    this.enemigo.add(enemigo);
    this.enemigo.setVelocityX(-500);
    enemigo.setSize(90, 30);

    setTimeout(() => {
      if (!enemigo.body || !enemigo.body.touching.none) {
        return;
      }
      
      enemigo.destroy();
    }, 3000);
  }
}