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
    this.load.image("Portada","assets/images/PortadaOficial.png");
    this.load.image("MisilJugar","assets/images/Misiljugar.png");
    this.load.image("MisilInfo","assets/images/MisilInf.png");
    this.load.image("MisilInfinito","assets/images/MisilInfinito.png");
  }

  create() {
    this.add.image(400, 300, "Portada");
    this.jugar = this.add.image(875, 550, "MisilJugar");
    this.jugar.setInteractive();
    this.jugar.on("pointerdown", () => {
          this.scene.start("SeleccionNivel");
        });
    this.informacion = this.add.image(875, 750, "MisilInfo");
    this.informacion.setInteractive();
    this.informacion.on("pointerdown", () => {
          this.scene.start("Informacion");
        });
    this.nivelinfinito = this.add.image(875, 650, "MisilInfinito");
    this.nivelinfinito.setInteractive();
    this.nivelinfinito.on("pointerdown", () => {
          this.scene.start("nivelinfinito");
        });
  }


  

  update() {
  }
}
