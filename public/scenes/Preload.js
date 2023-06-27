export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("FondoNivel1", "./public/Images/FondoNivel1.png");
        this.load.image("FondoNivel2", "./public/Images/FondoNivel2.png");
        this.load.image("FondoNivel3", "./public/Images/FondoNivel3.png");
        this.load.image("Avion", "./public/Images/Avion.png");
        this.load.image("Enemigo", "./public/Images/Enemigo.png");
        this.load.image("Bala", "./public/Images/Bala.png");
        this.load.image("Nube1", "./public/Images/Nube 1.png");
        this.load.image("Nube2", "./public/Images/Nube 2.png");
        this.load.image("Nube3", "./public/Images/Nube 3.png");
        this.load.image("Nube4", "./public/Images/Nube 4.png");
        this.load.image("Montaña1", "./public/Images/Montaña 1.png");
        this.load.image("Montaña2", "./public/Images/Montaña 2.png");
        this.load.image("Montaña3", "./public/Images/Montaña 3.png");
        this.load.image("Montaña4", "./public/Images/Montaña 4.png");
        this.load.image("Montaña5", "./public/Images/Montaña 5.png");
        this.load.image("3Vidas", "./public/Images/3Vidas.png");
        this.load.image("2Vidas", "./public/Images/2Vidas.png");
        this.load.image("1Vidas", "./public/Images/1Vidas.png");
        this.load.image("0Vidas", "./public/Images/0Vidas.png");
        this.load.image("Pausa", "./public/Images/BotonPausa.png");
        this.load.image("POPUP", "./public/Images/PopUpPausa.png");
        this.load.image("Ganaste", "./public/Images/PopUpVictoria.png");
        this.load.image("Perdiste", "./public/Images/PopUpDerrota.png");
        this.load.image("Reanudar", "./public/Images/BotonReanudar.png");
        this.load.image("BtnSalir", "./public/Images/BotonMenu.png");
        this.load.image("BtnReiniciar", "./public/Images/BotonReiniciar.png");
        this.load.image("MedallaOro", "./public/Images/MedallaOro.png")
        this.load.image("MedallaPlata", "./public/Images/MedallaPlata.png")
        this.load.image("MedallaBronce", "./public/Images/MedallaBronce.png")
        this.load.image("Misil", "./public/Images/Misil.png");
        this.load.image("POPUPTiempo", "./public/Images/PopUpPausaTiempo.png");
        this.load.image("GanasteTiempo", "./public/Images/PopUpVictoriaTiempo.png");
        this.load.image("PerdisteTiempo", "./public/Images/PopUpDerrotaTiempo.png");
        this.load.image("Portada","./public/images/FondoMenu.png");
        this.load.image("MisilJugar","./public/images/MisilJugar.png");
        this.load.image("MisilControles","./public/images/MisilControles.png");
        this.load.image("MisilInfinito","./public/images/MisilModoInfinito.png");
        this.load.image("FondoNivele","./public/Images/FondoEleccionNivel.png");
        this.load.image("BtnNivel1","./public/Images/BotonNivel1.png");
        this.load.image("BtnNivel2","./public/Images/BotonNivel2.png");
        this.load.image("BtnNivel3","./public/Images/BotonNivel3.png");
        this.load.image("BtnVolver","./public/Images/BotonVolver.png");
        this.load.image("JugadorQuieto","./public/Images/Jugador2.png")
        this.load.image("JugadorIzquierda","./public/Images/Jugador1.png")
        this.load.image("JugadorDerecha","./public/Images/Jugador3.png")
        this.load.image("JugadorArriba","./public/Images/Jugador4.png")
        this.load.image("JugadorAbajo","./public/Images/Jugador5.png");

        this.load.spritesheet("Movimiento", "./public/Images/MovimientoAvion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("Explosion", "public/Images/ExplosionSprite.png", {
          frameWidth: 128,
          frameHeight: 128
        });
      }
    
      create() {
     /*  this.anims.create({
          key: "Arriba",
          frames: this.anims.generateFrameNumbers("Movimiento", { start: 3, end: 4 }),
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: "Abajo",
          frames: this.anims.generateFrameNumbers("Movimiento", { start: 5, end: 6 }),
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: "Derecha",
          frames: ({key: "Movimiento",  frame: 1 }),
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: "Izquierda",
          frames: ({key: "Movimiento",  frame: 2 }),
          frameRate: 4,
          repeat: -1
        });
        this.anims.create({
          key: "Quieto",
          frames: ({key: "MovimientoAvion",  frame: 0 }),
          frameRate: 4,
          repeat: -1
        });
      */
        this.scene.start("menuprincipal")
        

        }
    
      
    
      update() {
      }
    }