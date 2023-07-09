// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("menuprincipal");
  }

  init() {

  }

  preload() {

  }

  create() {
    this.add.image(400, 300, "portada");
    this.jugar = this.add.image(950, 575, "misiljugar");
    this.jugar.setInteractive();
    this.jugar.on("pointerdown", () => {
          this.scene.start("seleccionnivel");
          this.menu.stop()
        });
    this.informacion = this.add.image(950, 650, "misilcontroles")
    this.informacion.setInteractive();
    this.informacion.on("pointerdown", () => {
         this.scene.start("menucontroles"); //ESTA BUGUEADA MANDA A NIVEL INFINITO
          this.menu.stop()
        });
  
    this.nivelinfinito = this.add.image(950, 725, "misilinfinito");
    this.nivelinfinito.setInteractive();
    this.nivelinfinito.on("pointerdown", () => {
          this.scene.start("nivelinfinito");
                    this.menu.stop()
        });

    this.menu = this.sound.add("musicamenu", {loop: true, volume: 1});
    this.menu.play();
  }


  

  update() {
  }

}
