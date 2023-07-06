export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("fondonivel1", "./public/fondonivel1.png");
        this.load.image("fondonivel2", "./public/fondonivel2.png");
        this.load.image("fondonivel3", "./public/fondonivel3.png");
        this.load.image("fondocontroles", "./public/fondocontroles.png");
        this.load.image("avion", "./public/avion.png");
        this.load.image("enemigo", "./public/enemigo.png");
        this.load.image("bala", "./public/bala.png");
        this.load.image("nube1", "./public/nube1.png");
        this.load.image("nube2", "./public/nube2.png");
        this.load.image("nube3", "./public/nube3.png");
        this.load.image("nube4", "./public/nube4.png");
        this.load.image("montaña1", "./public/montaña1.png");
        this.load.image("montaña2", "./public/montaña2.png");
        this.load.image("montaña3", "./public/montaña3.png");
        this.load.image("montaña4", "./public/montaña4.png");
        this.load.image("montaña5", "./public/montaña5.png");
        this.load.image("3vidas", "./public/3vidas.png");
        this.load.image("2vidas", "./public/2vidas.png");
        this.load.image("1vidas", "./public/1vidas.png");
        this.load.image("0vidas", "./public/0vidas.png");
        this.load.image("pausa", "./public/botonpausa.png");
        this.load.image("popup", "./public/popuppausa.png");
        this.load.image("ganaste", "./public/popupvictoria.png");
        this.load.image("perdiste", "./public/popupderrota.png");
        this.load.image("reanudar", "./public/botonreanudar.png");
        this.load.image("btnsalir", "./public/botonmenu.png");
        this.load.image("btnreiniciar", "./public/botonreiniciar.png");
        this.load.image("medallaoro", "./public/medallaoro.png")
        this.load.image("medallaplata", "./public/edallaplata.png")
        this.load.image("medallabronce", "./public/medallabdronce.png")
        this.load.image("misil", "./public/misil.png");
        this.load.image("popuptiempo", "./public/popuppausatiempo.png");
        this.load.image("ganastetiempo", "./public/popupvictoriatiempo.png");
        this.load.image("perdistetiempo", "./public/popupderrotatiempo.png");
        this.load.image("portada","./public/fondomenu.png");
        this.load.image("misiljugar","./public/misiljugar.png");
        this.load.image("misilcontroles","./public/misilcontroles.png");
        this.load.image("misilinfinito","./public/misilmodoinfinito.png");
        this.load.image("fondonivele","./public/fondoeleccionnivel.png");
        this.load.image("btnnivel1","./public/botonnivel1.png");
        this.load.image("btnnivel2","./public/botonnivel2.png");
        this.load.image("btnnivel3","./public/botonnivel3.png");
        this.load.image("btnvolver","./public/botonvolver.png");
        this.load.image("jugadorquieto","./public/jugador1.png")
        this.load.image("jugadorizquierda","./public/jugador2.png")
        this.load.image("jugadorderecha","./publi/jugador3.png")
        this.load.image("jugadorarriba","./public/jugador4.png")
        this.load.image("jugadorabajo","./public/jugador5.png");
        this.load.audio("musicamenu","./music/battlethemeB.mp3")
        this.load.audio("musicaniveles", "./music/thetreadofwar.mp3")
        this.load.audio("musicavictoria","./music/musicadevictoria.mp3")
        this.load.audio("musicaderrota", "./music/gameover.mp3")
        this.load.audio("explosionyo","./music/explosionyo.mp3")
        this.load.audio("explosionmalos","./music/explosionmalos.mp3")

        this.load.spritesheet("movimiento", "./public/movimientoavion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("explosion", "public/explosionsprite.png", {
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