export default class Nivel2 extends Phaser.Scene {
  constructor() {
    super("nivel2");
    this.vidas = 3;
    this.tiempoTranscurrido = 0;
    this.explosion = null;
    this.enemigosderrotados = 0
  }

  preload() {
 
  }
  create() {
    this.add.image(400, 300, "FondoNivel2");
    this.avion = this.physics.add.sprite(100, 300, "Avion").setScale(1.2);
    this.avion.setCollideWorldBounds(true);
    this.avion.setSize(90, 30);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.enemigo = this.physics.add.group();
    this.bala = this.physics.add.group();
    this.misil = this.physics.add.group();
    this.avion.setDepth(1);
  
    this.physics.add.overlap(
      this.avion, this.misil, this.avionEnemigoColision,null,this
    )
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
      delay: 1500,
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

    this.time.addEvent({
      delay: 1200,
      callback: this.addMisil,
      callbackScope: this,
      loop: true,
    });

   const tiempo = this.time.addEvent({
      delay: 1000,
      callback: this.cronometro,
      callbackScope: this,
      loop: true,
    });

    this.lastEnemyY = 0;

    this.input.keyboard.on("keydown-SPACE", this.disparar, this);

    this.vidasImagen = this.add
      .image(120, 10, "3Vidas")
      .setOrigin(1, 0)
      .setScale(0.7);
     this.anims.create({
        key: "Explosion",
        frames: this.anims.generateFrameNumbers("Explosion", { start: 1, end: 10 }),
        frameRate: 4,
        repeat: 0
      });
      this.anims.create({
        key: "ExplosionEnemigos",
        frames: this.anims.generateFrameNumbers("Explosion", { start: 1, end: 3 }),
        frameRate : 8,
        repeat: 0
      });
    this.Pausa = this.add.image(770,27, "Pausa").setScale().setInteractive();
    this.Pausa.setInteractive().on("pointerup", this.pausarJuego, this);
    this.Pausa.setDepth(2)
    this.textoTiempo = this.add.text(657, 15,  ":", {fontFamily:"pressStart2P", fontSize: "20px", fill: "#FFFFFF" })

  }

  update() {
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
      this.avion.setVelocityX(-350);
      this.avion.setTexture("JugadorIzquierda")
    }
    else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
      this.avion.setVelocityX(350);
      this.avion.setTexture("JugadorDerecha")

    }
    else {
      this.avion.setVelocityX(0);
      this.avion.setTexture("JugadorQuieto")
    }

    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W).isDown) {
      this.avion.setVelocityY(-350);
      this.avion.setTexture("JugadorArriba")
    }
    else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
          this.avion.setVelocityY(350);
          this.avion.setTexture("JugadorAbajo")
        }
    else {this.avion.setVelocityY(0)

      }
    this.textoTiempo.setText(this.tiempoTranscurrido, this); this

  }
  cronometro(){
    if (!this.pausado) {this.tiempoTranscurrido++}
    if (this.tiempoTranscurrido >= 2 && this.vidas >= 1){
      this.escenaGanar(); 

    }
    console.log("tiempo");
  }
  avionEnemigoColision(avion, enemigo, misil) {
    this.vidas--;
    this.explosionEnemigo(enemigo.x, enemigo.y,this.misil.x,this.misil.y)

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
  addMisil(){
    const randomX = Phaser.Math.RND.between(100, 700);
    const randomY = Phaser.Math.Between(-100, -50)
    const misil = this.physics.add.sprite(randomX, randomY, "Misil").setScale(0.3)
    this.misil.add(misil);
    this.misil.setVelocityY(500)
    misil.setSize(50, 190)
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
  explosionEnemigo(x, y) {
    this.explosionenemigo = this.add.sprite(x, y, "ExplosionEnemigos").setScale(2); // Ajusta el valor de escala según tus necesidades
    this.explosionenemigo.setOrigin(0.5, 0.5); // Ajusta el origen del sprite para que la posición sea relativa al centro
    this.explosionenemigo.on("animationcomplete", () => {
      this.explosionenemigo.destroy()
    }, this);
    this.explosionenemigo.play("ExplosionEnemigos");

  }
  //puntaje() {
  //  this.enemigosderrotados ++
  //  console.log("Enemigos derrotados", this.enemigosderrotados);
  //  if (this.enemigosderrotados >= 10
  //     && this.vidas >= 1) {
  //    this.escenaGanar();
  //  }
  // }
  pausarJuego() {
    this.reanudar = this.add.sprite(390, 411, "Reanudar");
    this.reanudar.setInteractive();
    this.reanudar.on("pointerdown", () => this.reanudarJuego(), this);
    this.reanudar.setScale();
    this.reanudar.setDepth(4);
    this.physics.pause();
    this.reanudar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.textopausa= this.add.text(396,330, this.tiempoTranscurrido,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(5);
    
    this.reiniciar = this.add.sprite(480, 410, "BtnReiniciar");
    this.reiniciar.setInteractive();
    this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
    this.reiniciar.setScale();
    this.reiniciar.setDepth(4);
    this.reiniciar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    
    this.Popup = this.add.image(400, 300, "POPUPTiempo").setVisible(false);
    this.Popup.setVisible(true);
    this.Popup.setDepth(3);
    
    this.pausado = true;
    
    
   
    this.salir = this.add.sprite(300, 410, "BtnSalir");
    this.salir.setInteractive();
    this.salir.on("pointerdown", () => this.salirJuego(), this);
    this.salir.setScale();
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
    this.textopausa.setVisible(false).setActive(false);
   // this.tiempoTranscurrido.resume();
  }

  salirJuego() {
      this.scene.start("SeleccionNivel");
      this.vidas= 3
      this.tiempoTranscurrido = 0
      this.enemigosderrotados = 0
    }
  escenaGanar() {
    this.ganar = this.add.image(400, 300, "GanasteTiempo", true); this
    this.ganar.setDepth(3);
    this.textopausa= this.add.text(400,335, this.tiempoTranscurrido,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(5);
    this.reiniciar = this.add.sprite(480, 410, "BtnReiniciar");
    this.reiniciar.setInteractive();
    this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
    this.reiniciar.setScale();
    this.reiniciar.setDepth(4);
    this.reiniciar.setVisible(true).setActive(true);
    this.scene.bringToTop();
    
    
    this.salir = this.add.sprite(300, 410, "BtnSalir");
    this.salir.setInteractive();
    this.salir.on("pointerdown", () => this.salirJuego(), this);
    this.salir.setScale();
    this.salir.setDepth(4);
    this.salir.setVisible(true).setActive(true);
    this.scene.bringToTop();
    this.pausado = true;
    this.physics.pause();
    
    this.Oro = this.add.image(388,250, "MedallaOro").setDepth(4)
    this.Plata = this.add.image(320, 250, "MedallaPlata").setDepth(4)
    this.Bronce = this.add.image(455, 254, "MedallaBronce").setDepth(4)

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
      this.perder = this.add.image(395, 315, "PerdisteTiempo");
      this.perder.setDepth(3);
      this.add.text(393,337, this.tiempoTranscurrido,{fontFamily:"pressStart2P", fontSize: "30px", fill: "#003366" } ).setDepth(3);
      this.reiniciar = this.add.sprite(480, 410, "BtnReiniciar");
      this.reiniciar.setInteractive();
      this.reiniciar.on("pointerdown", () => this.reiniciarJuego(), this);
      this.reiniciar.setScale();
      this.reiniciar.setDepth(4);
      this.reiniciar.setVisible(true).setActive(true);
      this.scene.bringToTop();
      
      this.salir = this.add.sprite(300, 410, "BtnSalir");
      this.salir.setInteractive();
      this.salir.on("pointerdown", () => this.salirJuego(), this);
      this.salir.setScale();
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
   // this.physics.resume();
    this.vidas= 3
    this.tiempoTranscurrido = 0
    this.enemigosderrotados = 0
  
  }

  
    }

