export default class Preload extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("preload");
      }
      init() {

      }
    
      preload() {
        this.load.image("fondonivel1", "./public/Images/FondoNivel1.png");
        this.load.image("fondonivel2", "./public/Images/FondoNivel2.png");
        this.load.image("fondonivel3", "./public/Images/FondoNivel3.png");
        this.load.image("fondocontroles", "./public/Images/FondoControles.png");
        this.load.image("avion", "./public/Images/Avion.png");
        this.load.image("enemigo", "./public/Images/Enemigo.png");
        this.load.image("bala", "./public/Images/Bala.png");
        this.load.image("nube1", "./public/Images/Nube1.png");
        this.load.image("nube2", "./public/Images/Nube2.png");
        this.load.image("nube3", "./public/Images/Nube3.png");
        this.load.image("nube4", "./public/Images/Nube4.png");
        this.load.image("montaña1", "./public/Images/Montaña1.png");
        this.load.image("montaña2", "./public/Images/Montaña2.png");
        this.load.image("montaña3", "./public/Images/Montaña3.png");
        this.load.image("montaña4", "./public/Images/Montaña4.png");
        this.load.image("montaña5", "./public/Images/Montaña5.png");
        this.load.image("3vidas", "./public/Images/3Vidas.png");
        this.load.image("2vidas", "./public/Images/2Vidas.png");
        this.load.image("1vidas", "./public/Images/1Vidas.png");
        this.load.image("0vidas", "./public/Images/0Vidas.png");
        this.load.image("pausa", "./public/Images/BotonPausa.png");
        this.load.image("popup", "./public/Images/PopUpPausa.png");
        this.load.image("ganaste", "./public/Images/PopUpVictoria.png");
        this.load.image("perdiste", "./public/Images/PopUpDerrota.png");
        this.load.image("reanudar", "./public/Images/BotonReanudar.png");
        this.load.image("btnsalir", "./public/Images/BotonMenu.png");
        this.load.image("btnreiniciar", "./public/Images/BotonReiniciar.png");
        this.load.image("medallaoro", "./public/Images/MedallaOro.png")
        this.load.image("medallaplata", "./public/Images/MedallaPlata.png")
        this.load.image("medallabronce", "./public/Images/MedallaBronce.png")
        this.load.image("misil", "./public/Images/Misil.png");
        this.load.image("popuptiempo", "./public/Images/PopUpPausaTiempo.png");
        this.load.image("ganastetiempo", "./public/Images/PopUpVictoriaTiempo.png");
        this.load.image("perdistetiempo", "./public/Images/PopUpDerrotaTiempo.png");
        this.load.image("portada","./public/images/FondoMenu.png");
        this.load.image("misiljugar","./public/images/MisilJugar.png");
        this.load.image("misilcontroles","./public/images/MisilControles.png");
        this.load.image("misilinfinito","./public/images/MisilModoInfinito.png");
        this.load.image("fondonivele","./public/Images/FondoEleccionNivel.png");
        this.load.image("btnnivel1","./public/Images/BotonNivel1.png");
        this.load.image("btnnivel2","./public/Images/BotonNivel2.png");
        this.load.image("btnnivel3","./public/Images/BotonNivel3.png");
        this.load.image("btnvolver","./public/Images/BotonVolver.png");
        this.load.image("jugadorquieto","./public/Images/Jugador1.png")
        this.load.image("jugadorizquierda","./public/Images/Jugador2.png")
        this.load.image("jugadorderecha","./public/Images/Jugador3.png")
        this.load.image("jugadorarriba","./public/Images/Jugador4.png")
        this.load.image("jugadorabajo","./public/Images/Jugador5.png");
        this.load.audio("musicamenu","./music/battleThemeB.mp3")
        this.load.audio("musicaniveles", "./music/TheTreadofwar.mp3")
        this.load.audio("musicavictoria","./music/Musicadevictoria.mp3")
        this.load.audio("musicaderrota", "./music/GameOver.mp3")
        this.load.audio("explosionyo","./music/explosionyo.mp3")
        this.load.audio("explosionmalos","./music/explosionmalos.mp3")

        this.load.spritesheet("movimiento", "./public/Images/MovimientoAvion.png", {
          frameWidth: 128,
          frameHeight: 128
        });  
    
    
        this.load.spritesheet("explosion", "public/Images/ExplosionSprite.png", {
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