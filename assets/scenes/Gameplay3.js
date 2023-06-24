export default class Gameplay3 extends Phaser.Scene {
  constructor() {
    super("gameplay3");
    this.vidas = 3;
    this.tiempoTranscurrido = 0;
    this.explosion = null;
    this.enemigosderrotados = 0
  }

  preload() {
    this.load.image("Fondo", "assets/Images/Fondo.png");
    this.load.image("Avion", "assets/Images/Avion.png");
    this.load.image("Enemigo", "assets/Images/Enemigo.png");
    this.load.image("Bala", "assets/Images/Bala.png");
    this.load.image("Nube1", "assets/Images/Nube 1.png");
    this.load.image("Nube2", "assets/Images/Nube 2.png");
    this.load.image("Nube3", "assets/Images/Nube 3.png");
    this.load.image("Nube4", "assets/Images/Nube 4.png");
    this.load.image("Montaña1", "assets/Images/Montaña 1.png");
    this.load.image("Montaña2", "assets/Images/Montaña 2.png");
    this.load.image("Montaña3", "assets/Images/Montaña 3.png");
    this.load.image("Montaña4", "assets/Images/Montaña 4.png");
    this.load.image("Montaña5", "assets/Images/Montaña 5.png");
    this.load.image("3Vidas", "assets/Images/3Vidas.png");
    this.load.image("2Vidas", "assets/Images/2Vidas.png");
    this.load.image("1Vidas", "assets/Images/1Vidas.png");
    this.load.image("0Vidas", "assets/Images/0Vidas.png");
    this.load.image("Pausa", "assets/Images/PausaTEM.png");
    this.load.image("POPUP", "assets/Images/POPUPTEM.png");
    this.load.image("Ganaste", "assets/Images/VictoriaTEM.png");
    this.load.image("Perdiste", "assets/Images/DerrotaTEM.png");
    this.load.image("Reanudar", "assets/Images/REANUDARTEM.png");
    this.load.image("BtnSalir", "assets/Images/SALIRTEM.png");
    this.load.image("BtnReiniciar", "assets/Images/REINICIARTEM.png");
    this.load.spritesheet("Explosion", "assets/Images/ExplosionSprite.png", {
      frameWidth: 128,
      frameHeight: 128
    });
  }

  create() {
    this.add.image(400, 300, "Fondo");
    this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
    this.avion.setCollideWorldBounds(true);
    this.avion.setSize(90, 30);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.enemigo = this.physics.add.group();
    this.bala = this.physics.add.group();
    this.avion.setDepth(1);
  

    this.physics.add.overlap(
      this.avion,
      this.enemigo,
      this.avionEnemigoColision,
      null,
      this
    );
    this.physics.add.overlap(
      this.bala,
      this.enemigo,
      this.balaEnemigoColision,
      null,
      this
    );


    this.time.addEvent({
      delay: 500,
      callback: this.addAvion,
      callbackScope: this,
      loop: true
    });
    this.time.addEvent({
      delay: 2000,
      callback: this.agregarNube,
      callbackScope: this,
      loop: true
    });
    this.time.addEvent({
      delay: 5500,
      callback: this.agregarMontaña,
      callbackScope: this,
      loop: true
    });

    this.lastEnemyY = 0;

    this.input.keyboard.on("keydown-SPACE", this.disparar, this);

    this.vidasImagen = this.add
      .image(750, 10, "3Vidas")
      .setOrigin(1, 0)
      .setScale(0.7);
     this.anims.create({
        key: "Explosion",
        frames: this.anims.generateFrameNumbers("Explosion", { start: 1, end: 10 }),
        frameRate: 4,
        repeat: 0
      });
    this.Pausa = this.add.image(30,30, "Pausa").setScale(0.3).setInteractive();
    this.Pausa.setInteractive().on("pointerup", this.pausarJuego, this);
    
    this.Pausa.setDepth(2)
    this.textoenemigoderrotado = this.add.text(400, 10, "Enemigos derrotados:" + this.enemigosderrotados, this); this
  }

  update(time, delta) {
    if (this.cursors.left.isDown) {
      this.avion.setVelocityX(-160);
    }
    else if (this.cursors.right.isDown) {
      this.avion.setVelocityX(160);

    }
    //stop
    else {
      this.avion.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.avion.setVelocityY(-330);
    }
    else if (this.cursors.down.isDown) {
          this.avion.setVelocityY(330);
        }
    else {this.avion.setVelocityY(0)}
  

    this.update = function(time, delta) {
      if (!this.pausado) {
        this.tiempoTranscurrido += delta;
      }
    };

    this.textoenemigoderrotado.setText("Enemigos derrotados:" + this.enemigosderrotados, this); this

  }

  avionEnemigoColision(avion, enemigo) {
    this.vidas--;
    switch (this.vidas) {
      case 2:
        this.vidasImagen.setTexture("2Vidas");
        break;
      case 1:
        this.vidasImagen.setTexture("1Vidas");
        break;
      case 0:
        this.vidasImagen.setTexture("0Vidas");
        break;
    }
    
    this.vidasImagen.x = 750;
    this.vidasImagen.y = 10;
    enemigo.destroy();
    if (this.vidas === 0) {

      this.crearExplosion(this.avion.x, this.avion.y);
      this.avion.disableBody(true, true);
      this.escenaPerder()
    }
  }
  balaEnemigoColision(bala, enemigo) {
    bala.destroy();
    enemigo.destroy();
    this.puntaje()
    //console.log("Enemigo derrotado");
  }

  disparar() {
    const bala = this.physics.add.sprite(
      this.avion.x + 50,
      this.avion.y,
      "Bala"
    );
    this.bala.add(bala);
    bala.setVelocityX(800);
    bala.setSize(90, 40);
    bala.setScale(0.3);
  }

  addAvion() {
    const randomY = Phaser.Math.RND.between(100, 500);
    const randomX = Phaser.Math.Between(900,1000);
    const enemigo = this.physics.add.sprite(randomX, randomY, "Enemigo").setScale(
      1.2
    );
    this.enemigo.add(enemigo);
    this.enemigo.setVelocityX(-500);
    enemigo.setSize(90, 30);
    this.enemigo.setDepth(1);
    
    //if(this.vidas===0){
    //  this.enemigo.setVelocityX(0);
   // }

    setTimeout(() => {
      if (!enemigo.body || !enemigo.body.touching.none) {
        return;
      }
      enemigo.destroy();
    }, 20000);
  }

  agregarNube() {
   if (!this.pausado) {
   const nube = this.physics.add.sprite(
      800,
      Phaser.Math.Between(100, 500),
      Phaser.Math.RND.pick(["Nube1", "Nube2", "Nube3", "Nube4"])
    );
    nube.body.setVelocityX(-200);
    nube.setSize(1, 1);
    nube.setDepth(0);
  }
  }
 // pausarNubes() {
   // for (let i = 0; i < this.nubes.length; i++) {
   //   this.nubes[i].setVelocityX(0); // Pausar el movimiento de cada nube
   // }
  //}
  agregarMontaña() {
    const montaña = this.physics.add.sprite(
      1000,
      300,
      Phaser.Math.RND.pick(["Montaña1","Montaña2","Montaña3","Montaña4","Montaña5"])
    );
    montaña.body.setVelocityX(-150);
    montaña.setSize(1, 1);
    montaña.setDepth(2);
    if(this.vidas===0){
      montaña.setVelocityX(0);
    }

  }

  crearExplosion(x, y) {
    this.explosion = this.add.sprite(x, y, "Explosion").setScale(2); // Ajusta el valor de escala según tus necesidades
    this.explosion.setOrigin(0.5, 0.5); // Ajusta el origen del sprite para que la posición sea relativa al centro
    this.explosion.on("animationcomplete", () => {
      this.explosion.destroy();
      this.avion.disableBody(true, true); // Desactiva el cuerpo físico del avión
    }, this);
    this.explosion.play("Explosion");
  }
  puntaje() {
    this.enemigosderrotados ++
    console.log("Enemigos derrotados", this.enemigosderrotados);
    if (this.enemigosderrotados >= 5 && this.vidas > 1) {
      this.escenaGanar();
    }
   }
  pausarJuego() {
    this.reanudar = this.add.sprite(400, 400, "Reanudar");
    this.reanudar.setInteractive();
    this.reanudar.on("pointerdown", () => this.reanudarJuego(), this);
    this.reanudar.setScale(0.2);
    this.reanudar.setDepth(4);
    this.physics.pause();
    this.reanudar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    
    this.Popup = this.add.image(400, 300, "POPUP").setVisible(false);
    this.Popup.setVisible(true);
    this.Popup.setDepth(3);
    
    this.pausado = true;
    
   
   this.salir = this.add.sprite(300, 400, "BtnSalir");
   this.salir.setInteractive();
   this.salir.on("pointerdown", () => this.salirJuego(), this);
   this.salir.setScale(0.2);
   this.salir.setDepth(4);
   this.salir.setVisible(true).setActive(true);
   this.scene.bringToTop();
  //this.tiempoTranscurrido.pause();

}
  reanudarJuego() {
    this.physics.resume();
    this.Popup.setVisible(false);
    this.reanudar.setVisible(false).setActive(false);
    this.reiniciar.setVisible(false).setActive(false);
    this.salir.setVisible(false).setActive(false);
    //this.ganar.setVisible(false).setActive(false);
    this.pausado = false;
   // this.tiempoTranscurrido.resume();
  }

  salirJuego() {
      this.scene.start("Menu");
    }
  escenaGanar() {
    this.ganar = this.add.image(400, 300, "Ganaste");
    this.ganar.setDepth(3);
    this.add.text(400,200, "Has derrotado :" + this.enemigosderrotados + " enemigos").setDepth(3);
    
    this.reiniciar = this.add.sprite(500, 400, "BtnReiniciar");
    this.reiniciar.setInteractive();
    this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
    this.reiniciar.setScale(0.2);
    this.reiniciar.setDepth(4);
    this.reiniciar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    
    this.salir = this.add.sprite(300, 400, "BtnSalir");
    this.salir.setInteractive();
    this.salir.on("pointerdown", () => this.salirJuego(), this);
    this.salir.setScale(0.2);
    this.salir.setDepth(4);
    this.salir.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.pausado = true;
    this.physics.pause();

  }
  escenaPerder() {
    setTimeout(() => {
      this.perder = this.add.image(400, 300, "Perdiste");
      this.perder.setDepth(3);
      this.add.text(400,200, "Has derrotado :" + this.enemigosderrotados + " enemigos").setDepth(3);
      this.reiniciar = this.add.sprite(500, 400, "BtnReiniciar");
      this.reiniciar.setInteractive();
      this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
      this.reiniciar.setScale(0.2);
      this.reiniciar.setDepth(4);
      this.reiniciar.setVisible(true).setActive(true);
      this.scene.bringToTop();
      
      this.salir = this.add.sprite(300, 400, "BtnSalir");
      this.salir.setInteractive();
      this.salir.on("pointerdown", () => this.salirJuego(), this);
      this.salir.setScale(0.2);
      this.salir.setDepth(4);
      this.salir.setVisible(true).setActive(true);
      this.scene.bringToTop();
    
    }, 1000);
    this.pausado = true;
    this.physics.pause();
  }
  reiniciarJuego() {
    this.scene.restart();
    this.pausado = false;
    this.physics.resume();
    this.vidas= 3
    this.tiempoTranscurrido = 0
    this.enemigosderrotados = 0
  
  }

  
    }

