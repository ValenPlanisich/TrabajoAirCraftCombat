export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("fondonivel1", "./public/FondoNivel1.png");
        this.load.image("fondonivel2", "./public/FondoNivel2.png");
        this.load.image("fondonivel3", "./public/FondoNivel3.png");
        this.load.image("fondocontroles", "./public/FondoControles.png");
        this.load.image("avion", "./public/Avion.png");
        this.load.image("enemigo", "./public/Enemigo.png");
        this.load.image("bala", "./public/Bala.png");
        this.load.image("nube1", "./public/Nube1.png");
        this.load.image("nube2", "./public/Nube2.png");
        this.load.image("nube3", "./public/Nube3.png");
        this.load.image("nube4", "./public/Nube4.png");
        this.load.image("montaña1", "./public/Montaña1.png");
        this.load.image("montaña2", "./public/Montaña2.png");
        this.load.image("montaña3", "./public/Montaña3.png");
        this.load.image("montaña4", "./public/Montaña4.png");
        this.load.image("montaña5", "./public/Montaña5.png");
        this.load.image("3vidas", "./public/3Vidas.png");
        this.load.image("2vidas", "./public/2Vidas.png");
        this.load.image("1vidas", "./public/1Vidas.png");
        this.load.image("0vidas", "./public/0Vidas.png");
        this.load.image("pausa", "./public/BotonPausa.png");
        this.load.image("popup", "./public/PopUpPausa.png");
        this.load.image("ganaste", "./public/PopUpVictoria.png");
        this.load.image("perdiste", "./public/PopUpDerrota.png");
        this.load.image("reanudar", "./public/BotonReanudar.png");
        this.load.image("btnsalir", "./public/BotonMenu.png");
        this.load.image("btnreiniciar", "./public/BotonReiniciar.png");
        this.load.image("medallaoro", "./public/MedallaOro.png")
        this.load.image("medallaplata", "./public/MedallaPlata.png")
        this.load.image("medallabronce", "./public/MedallaBronce.png")
        this.load.image("misil", "./public/Misil.png");
        this.load.image("popuptiempo", "./public/PopUpPausaTiempo.png");
        this.load.image("ganastetiempo", "./public/PopUpVictoriaTiempo.png");
        this.load.image("perdistetiempo", "./public/PopUpDerrotaTiempo.png");
        this.load.image("portada","./public/FondoMenu.png");
        this.load.image("misiljugar","./public/MisilJugar.png");
        this.load.image("misilcontroles","./public/MisilControles.png");
        this.load.image("misilinfinito","./public/MisilModoInfinito.png");
        this.load.image("fondonivele","./public/FondoEleccionNivel.png");
        this.load.image("btnnivel1","./public/BotonNivel1.png");
        this.load.image("btnnivel2","./public/BotonNivel2.png");
        this.load.image("btnnivel3","./public/BotonNivel3.png");
        this.load.image("btnvolver","./public/BotonVolver.png");
        this.load.image("jugadorquieto","./public/Jugador1.png")
        this.load.image("jugadorizquierda","./public/Jugador2.png")
        this.load.image("jugadorderecha","./publi/Jugador3.png")
        this.load.image("jugadorarriba","./public/Jugador4.png")
        this.load.image("jugadorabajo","./public/Jugador5.png");
        this.load.audio("musicamenu","./music/battleThemeB.mp3")
        this.load.audio("musicaniveles", "./music/thetreadofwar.mp3")
        this.load.audio("musicavictoria","./music/Musicadevictoria.mp3")
        this.load.audio("musicaderrota", "./music/GameOver.mp3")
        this.load.audio("explosionyo","./music/explosionyo.mp3")
        this.load.audio("explosionmalos","./music/explosionmalos.mp3")

        this.load.spritesheet("movimiento", "./public/MovimientoAvion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("explosion", "public/ExplosionSprite.png", {
          frameWidth: 128,
          frameHeight: 128
        });
      }
    
      create() {
    
        this.scene.start("menuprincipal")
        

        }
    
      
    
      update() {
      }
    }