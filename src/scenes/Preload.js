export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("fondonivel1", "./public/images/fondonivel1.png");
        this.load.image("fondonivel2", "./public/images/fondonivel2.png");
        this.load.image("fondonivel3", "./public/images/fondonivel3.png");
        this.load.image("fondocontroles", "./public/images/fondocontroles.png");
        this.load.image("avion", "./public/images/avion.png");
        this.load.image("enemigo", "./public/images/enemigo.png");
        this.load.image("bala", "./public/images/bala.png");
        this.load.image("nube1", "./public/images/nube1.png");
        this.load.image("nube2", "./public/images/nube2.png");
        this.load.image("nube3", "./public/images/nube3.png");
        this.load.image("nube4", "./public/images/nube4.png");
        this.load.image("montaña1", "./public/images/montaña1.png");
        this.load.image("montaña2", "./public/images/montaña2.png");
        this.load.image("montaña3", "./public/images/montaña3.png");
        this.load.image("montaña4", "./public/images/montaña4.png");
        this.load.image("montaña5", "./public/images/montaña5.png");
        this.load.image("3vidas", "./public/images/3vidas.png");
        this.load.image("2vidas", "./public/images/2vidas.png");
        this.load.image("1vidas", "./public/images/1vidas.png");
        this.load.image("0vidas", "./public/images/0vidas.png");
        this.load.image("pausa", "./public/images/botonpausa.png");
        this.load.image("popup", "./public/images/popuppausa.png");
        this.load.image("ganaste", "./public/images/popupvictoria.png");
        this.load.image("perdiste", "./public/images/popupderrota.png");
        this.load.image("reanudar", "./public/images/botonreanudar.png");
        this.load.image("btnsalir", "./public/images/botonmenu.png");
        this.load.image("btnreiniciar", "./public/images/botonreiniciar.png");
        this.load.image("medallaoro", "./public/images/medallaoro.png")
        this.load.image("medallaplata", "./public/images/medallaplata.png")
        this.load.image("medallabronce", "./public/images/medallabronce.png")
        this.load.image("misil", "./public/images/misil.png");
        this.load.image("popuptiempo", "./public/images/popuppausatiempo.png");
        this.load.image("ganastetiempo", "./public/images/popupvictoriatiempo.png");
        this.load.image("perdistetiempo", "./public/images/popupderrotatiempo.png");
        this.load.image("portada","./public/images/fondomenu.png");
        this.load.image("misiljugar","./public/images/misiljugar.png");
        this.load.image("misilcontroles","./public/images/misilcontroles.png");
        this.load.image("misilinfinito","./public/images/misilinfinito.png");
        this.load.image("fondonivele","./public/images/fondoeleccionnivel.png");
        this.load.image("btnnivel1","./public/images/botonnivel1.png");
        this.load.image("btnnivel2","./public/images/botonnivel2.png");
        this.load.image("btnnivel3","./public/images/botonnivel3.png");
        this.load.image("btnvolver","./public/images/botonvolver.png");
        this.load.image("jugadorquieto","./public/images/jugador1.png")
        this.load.image("jugadorizquierda","./public/images/jugador2.png")
        this.load.image("jugadorderecha","./public/images/jugador3.png")
        this.load.image("jugadorarriba","./public/images/jugador4.png")
        this.load.image("jugadorabajo","./public/images/jugador5.png");
        this.load.audio("musicademenu","./public/audio/battleThemeB.mp3")
        this.load.audio("musicaniveles", "./public/audio/TheTreadofWar.mp3")
        this.load.audio("musicavictoria","./public/audio/Musicadevictoria.mp3")
        this.load.audio("musicaderrota", "./public/audio/GameOver.mp3")
        this.load.audio("explosionyo","./public/audio/explosionyo.mp3")
        this.load.audio("explosionmalos","./public/audio/explosionmalos.mp3")

        this.load.spritesheet("movimiento", "./public/images/movimientoavion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("explosion", "public/images/explosionsprite.png", {
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