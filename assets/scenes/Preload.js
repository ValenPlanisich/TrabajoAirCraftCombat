export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("FondoNivel1", "assets/Images/Fondo1.png");
        this.load.image("FondoNivel2", "assets/Images/Fondo2.png");
        this.load.image("FondoNivel3", "assets/Images/Fondo3.png");
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
        this.load.image("Pausa", "assets/Images/BotonPausa.png");
        this.load.image("POPUP", "assets/Images/PopUpPausa.png");
        this.load.image("Ganaste", "assets/Images/PopUpVictoria.png");
        this.load.image("Perdiste", "assets/Images/PopUpDerrota.png");
        this.load.image("Reanudar", "assets/Images/BotonReanudar.png");
        this.load.image("BtnSalir", "assets/Images/BotonMenu.png");
        this.load.image("BtnReiniciar", "assets/Images/BotonReiniciar.png");
        this.load.image("MedallaOro", "assets/Images/MedallaOro.png")
        this.load.image("MedallaPlata", "assets/Images/MedallaPlata.png")
        this.load.image("MedallaBronce", "assets/Images/MedallaBronce.png")
        this.load.image("Misil", "assets/Images/Misil.png");
        this.load.image("POPUPTiempo", "assets/Images/PopUpPausaTiempo.png");
        this.load.image("GanasteTiempo", "assets/Images/PopUpVictoriaTiempo.png");
        this.load.image("PerdisteTiempo", "assets/Images/PopUpDerrotaTiempo.png");
        this.load.image("Portada","assets/images/PortadaOficial.png");
        this.load.image("MisilJugar","assets/images/Misiljugar.png");
        this.load.image("MisilInfo","assets/images/MisilInf.png");
        this.load.image("MisilInfinito","assets/images/MisilInfinito.png");
        this.load.spritesheet("Movimiento", "assets/Images/MovimientoAvion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("Explosion", "assets/Images/ExplosionSprite.png", {
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