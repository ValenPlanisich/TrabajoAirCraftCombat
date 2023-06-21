export default class Gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay2");
    this.vidas = 3;
    this.tiempoTranscurrido = 0;
  }

  preload() {
    this.load.image("Fondo", "assets/Images/Fondo.png");
    this.load.image("Avion", "assets/Images/Avion.png");
    this.load.image("Enemigo", "assets/Images/Enemigo.png");
    this.load.image("Bala", "assets/Images/Bala.png");
    this.load.image("Misil","assets/Images/Misil.png")
    this.load.image("Nube1", "assets/Images/Nube 1.png");
    this.load.image("Nube2", "assets/Images/Nube 2.png");
    this.load.image("Nube3", "assets/Images/Nube 3.png");
    this.load.image("Nube4", "assets/Images/Nube 4.png");
    this.load.image("Montaña1", "assets/Images/Montaña 1.png");
    this.load.image("Montaña2", "assets/Images/Montaña 2.png");
    this.load.image("Montaña3", "assets/Images/Montaña 3.png");
    this.load.image("Montaña4", "assets/Images/Montaña 4.png");
    this.load.image("Montaña5", "assets/Images/Montaña 5.png");
  }

  create() {
    this.add.image(400, 300, "Fondo");
    this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
    this.avion.setCollideWorldBounds(true);
    this.avion.setSize(90, 30)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.enemigo = this.physics.add.group();
    this.bala = this.physics.add.group();
    this.misil = this.physics.add.group();
    this.avion.setDepth(1);
    this.vidasText = this.add.text(650, 10, `Vidas: ${this.vidas}`, { fontSize: '24px', fill: '#ffffff' });

    this.physics.add.overlap(this.avion, this.misil, this.avionMisilColision, null, this)
    this.physics.add.overlap(this.avion, this.enemigo, this.avionEnemigoColision, null, this);
    this.physics.add.overlap(this.bala, this.enemigo, this.balaEnemigoColision, null, this);

    this.time.addEvent({
      delay: 1200,
      callback: this.addAvion,
      callbackScope: this,
      loop: true,
    });
    this.lastEnemyY = 0;
    this.time.addEvent({
      delay: 1200,
      callback: this.addMisil,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 2000,
      callback: this.agregarNube,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 5500,
      callback: this.agregarMontaña,
      callbackScope: this,
      loop: true,
   });
    this.input.keyboard.on('keydown-SPACE', this.disparar, this);
  }
  update(time, delta) {
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
      this.tiempoTranscurrido += delta;
    
      if (this.tiempoTranscurrido >= 60000 && this.vidas > 1) {
        this.scene.start("victoria");
        return;
    }
  }
  avionEnemigoColision(avion, enemigo,) {
    this.vidas--;
    this.vidasText.setText(`Vidas: ${this.vidas}`);
    enemigo.destroy();
    if (this.vidas === 0) {
      this.gameOver();     
    }
  }
  avionMisilColision(avion, Misil){
    this.vidas--;
    this.vidasText.setText(`Vidas: ${this.vidas}`);
    Misil.destroy();
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
    this.enemigo.setDepth(1);
    setTimeout(() => {
      if (!enemigo.body || !enemigo.body.touching.none) {
        return;
      }
      
      enemigo.destroy();
    }, 3000);
  }
  addMisil(){
    const randomX = Phaser.Math.RND.between(100, 700);
    const randomY = Phaser.Math.Between(-100, -50)
    const misil = this.physics.add.sprite(randomX, randomY, "Misil").setScale(0.3)
    this.misil.add(misil);
    this.misil.setVelocityY(500)
    misil.setSize(50, 190)
  }
  agregarNube() {
    const nube = this.physics.add.sprite(800, Phaser.Math.Between(100, 500), Phaser.Math.RND.pick(["Nube1", "Nube2", "Nube3", "Nube4"]));
    nube.body.setVelocityX(-200);
    nube.setSize(1, 1) //se cambia para que la nhitbox no moleste al trabajar
    nube.setDepth(0);
  }
  agregarMontaña() {
    const montaña = this.physics.add.sprite(1000,300, Phaser.Math.RND.pick(["Montaña1", "Montaña2", "Montaña3", "Montaña4", "Montaña5"]));
    montaña.body.setVelocityX(-150);
    montaña.setSize(1, 1)
    montaña.setDepth(2);

  }

}