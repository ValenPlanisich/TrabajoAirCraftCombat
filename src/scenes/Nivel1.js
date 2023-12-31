export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("nivel1");
    this.vidas = 3;
    this.tiempoTranscurrido = 0;
    this.explosion = null;
    this.enemigosderrotados = 0
  }

  preload() {

  }

  create() {
    this.add.image(400, 300, "fondonivel1");
    this.avion = this.physics.add.sprite(100, 300, "jugadorquieto").setScale(1.2).setInteractive()
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
      delay: 1800,
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
      .image(120, 10, "3vidas")
      .setOrigin(1, 0)
      .setScale(0.7);
     this.anims.create({
        key: "Explosion",
        frames: this.anims.generateFrameNumbers("explosion", { start: 1, end: 10 }),
        frameRate: 4,
        repeat: 0
      });
      this.anims.create({
        key: "ExplosionEnemigos",
        frames: this.anims.generateFrameNumbers("explosion", { start: 1, end: 3 }),
        frameRate : 8,
        repeat: 0
      });
    this.Pausa = this.add.image(770,27, "pausa").setScale().setInteractive();
    this.Pausa.setInteractive().on("pointerup", this.pausarJuego, this);
    this.Pausa.setDepth(2)
    this.textoenemigoderrotado = this.add.text(677, 14, ":" ,{fontFamily:"pressStart2P", fontSize: "20px", fill: "#FFFFFF" });
    this.musicaniveles = this.sound.add("musicaniveles", {loop: true, volume: 1});
    this.musicaniveles.play();
    this.musicavictoria = this.sound.add("musicavictoria", {loop: false, volume: 1});
    this.musicaderrota = this.sound.add("musicaderrota", {loop: false, volume: 1});
    this.explosionyo = this.sound.add("explosionyo", {loop: false, volume: 1});
    this.explosionmalos = this.sound.add("explosionmalos", {loop: false, volume: 1});
  }
  update() {
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
      this.avion.setVelocityX(-350);
      this.avion.setTexture("jugadorizquierda")
    }
    else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
      this.avion.setVelocityX(350);
      this.avion.setTexture("jugadorderecha")
    }
    else {
      this.avion.setVelocityX(0);
      this.avion.setTexture("jugadorquieto")
    }
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown) {
      this.avion.setVelocityY(-350);
      this.avion.setTexture("jugadorarriba")
    }
    else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
          this.avion.setVelocityY(350);
          this.avion.setTexture("jugadorabajo")
        }
    else {this.avion.setVelocityY(0)
      }
    this.textoenemigoderrotado.setText(this.enemigosderrotados + "/10"); this
  }
  avionEnemigoColision(avion, enemigo) {
    this.vidas--;
    this.explosionEnemigo(enemigo.x, enemigo.y)
    switch (this.vidas) {
      case 2:
        this.vidasImagen.setTexture("2vidas");
        break;
      case 1:
        this.vidasImagen.setTexture("1vidas");
        break;
      case 0:
        this.vidasImagen.setTexture("0vidas");
        break;
    }
    this.vidasImagen.x = 120;
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
    this.explosionEnemigo(enemigo.x, enemigo.y)
  }
  disparar() {
    const bala = this.physics.add.sprite(
      this.avion.x + 50,
      this.avion.y,
      "bala"
    );
    this.bala.add(bala);
    bala.setVelocityX(800);
    bala.setSize(90, 40);
    bala.setScale(0.3);
  }
  addAvion() {
    const randomY = Phaser.Math.RND.between(100, 500);
    const randomX = Phaser.Math.Between(900,1000);
    const enemigo = this.physics.add.sprite(randomX, randomY, "enemigo").setScale(1.2);
    this.enemigo.add(enemigo);
    this.enemigo.setVelocityX(-500);
    enemigo.setSize(90, 30);
    this.enemigo.setDepth(1);
   
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
      Phaser.Math.RND.pick(["nube1", "nube2", "nube3", "nube4"])
    );
    nube.body.setVelocityX(-200);
    nube.setSize(1, 1);
    nube.setDepth(0);
  }
  }
  agregarMontaña() {
    const montaña = this.physics.add.sprite(
      1000,
      300,
      Phaser.Math.RND.pick(["montaña1","montaña2","montaña3","montaña4","montaña5"])
    );
    montaña.body.setVelocityX(-150);
    montaña.setSize(1, 1);
    montaña.setDepth(2);
    if(this.vidas===0){
      montaña.setVelocityX(0);
    }

  }
  crearExplosion(x, y) {
    this.explosion = this.add.sprite(x, y, "Explosion").setScale(2); 
    this.explosion.setOrigin(0.5, 0.5); 
    this.explosion.on("animationcomplete", () => {
      this.explosion.destroy();
      this.avion.disableBody(true, true); 
    }, this);
    this.explosion.play("Explosion");
    this.explosionyo.play();
  }
  explosionEnemigo(x, y) {
    this.explosionenemigo = this.add.sprite(x, y, "ExplosionEnemigos").setScale(2); 
    this.explosionenemigo.setOrigin(0.5, 0.5); 
    this.explosionenemigo.on("animationcomplete", () => {
      this.explosionenemigo.destroy()
    }, this);
    this.explosionenemigo.play("ExplosionEnemigos");
    this.explosionmalos.play();
  }
  puntaje() {
    this.enemigosderrotados ++
    console.log("Enemigos derrotados", this.enemigosderrotados);
    if (this.enemigosderrotados >= 10
       && this.vidas >= 1) {
      this.escenaGanar();
    }
   }
  pausarJuego() {
    this.reanudar = this.add.sprite(390, 411, "reanudar");
    this.reanudar.setInteractive();
    this.reanudar.on("pointerdown", () => this.reanudarJuego(), this);
    this.reanudar.setScale();
    this.reanudar.setDepth(4);
    this.physics.pause();
    this.reanudar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.textopausa= this.add.text(393,335, this.enemigosderrotados,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(5);
    this.reiniciar = this.add.sprite(480, 410, "btnreiniciar");
    this.reiniciar.setInteractive();
    this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
    this.reiniciar.setScale();
    this.reiniciar.setDepth(4);
    this.reiniciar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.Popup = this.add.image(400, 300, "popup").setVisible(false);
    this.Popup.setVisible(true);
    this.Popup.setDepth(3);
    this.pausado = true;
    this.salir = this.add.sprite(300, 410, "btnsalir");
    this.salir.setInteractive();
    this.salir.on("pointerdown", () => this.salirJuego(), this);
    this.salir.setScale();
    this.salir.setDepth(4);
    this.salir.setVisible(true).setActive(true);
    this.scene.bringToTop();
}
  reanudarJuego() {
    this.physics.resume();
    this.Popup.setVisible(false);
    this.reanudar.setVisible(false).setActive(false);
    this.reiniciar.setVisible(false).setActive(false);
    this.salir.setVisible(false).setActive(false);
    this.pausado = false;
    this.textopausa.setVisible(false).setActive(false);
  }
  salirJuego() {
      this.scene.start("seleccionnivel");
      this.vidas= 3
      this.tiempoTranscurrido = 0
      this.enemigosderrotados = 0
      this.musicaniveles.stop()
      this.musicaderrota.stop();
    }
  escenaGanar() {
    this.ganar = this.add.image(400, 300, "ganaste");
    this.ganar.setDepth(3);
    this.add.text(390,337, this.enemigosderrotados,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(3);
    this.reiniciar = this.add.sprite(481, 410, "btnreiniciar");
    this.reiniciar.setInteractive();
    this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
    this.reiniciar.setScale();
    this.reiniciar.setDepth(4);
    this.reiniciar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.salir = this.add.sprite(300, 410, "btnsalir");
    this.salir.setInteractive();
    this.salir.on("pointerdown", () => this.salirJuego(), this);
    this.salir.setScale();
    this.salir.setDepth(4);
    this.salir.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.pausado = true;
    this.physics.pause();
    this.Oro = this.add.image(388,250, "medallaoro").setDepth(4)
    this.Plata = this.add.image(320, 250, "medallaplata").setDepth(4)
    this.Bronce = this.add.image(455, 254, "medallabronce").setDepth(4)
    this.musicaniveles.stop()
    this.musicavictoria.play();
    if (this.vidas === 2){
      this.Oro.setVisible(false)
    }
    else if (this.vidas === 1){
      this.Oro.setVisible(false)
      this.Plata.setVisible(false)
    }
  }
  escenaPerder() {
    setTimeout(() => {
      this.perder = this.add.image(400, 300, "perdiste");
      this.perder.setDepth(3);
      this.add.text(393,337, this.enemigosderrotados,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(3);
      this.reiniciar = this.add.sprite(480, 410, "btnreiniciar");
      this.reiniciar.setInteractive();
      this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
      this.reiniciar.setScale();
      this.reiniciar.setDepth(4);
      this.reiniciar.setVisible(true).setActive(true);
      this.scene.bringToTop();
      this.salir = this.add.sprite(300, 410, "btnsalir");
      this.salir.setInteractive();
      this.salir.on("pointerdown", () => this.salirJuego(), this);
      this.salir.setScale();
      this.salir.setDepth(4);
      this.salir.setVisible(true).setActive(true);
      this.scene.bringToTop();
      this.musicaderrota.play();
    }, 1000);
    this.pausado = true;
    this.physics.pause();
    this.musicaniveles.stop()
  }
  reiniciarJuego() {
    this.scene.restart();
    this.pausado = false;
    this.vidas= 3
    this.tiempoTranscurrido = 0
    this.enemigosderrotados = 0
    this.musicaderrota.stop();
  }

  
    }

