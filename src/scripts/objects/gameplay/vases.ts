import Rose from "./rose";

export default class Vases extends Phaser.GameObjects.Container {
  private vases: Phaser.GameObjects.Image;

  constructor(scene) {
    super(scene)

    this.init()
  }

  private init() {
    this.initVases();
    this.initRoses();
  }

  private initVases() {
    const vases = this.vases = this.scene.add.image(0, 0, 'vases');
    vases.setOrigin(0.5);

    this.add(vases);
  }

  private setStartPosition(type, index) {

  }

  private initRoses() {
    // const whiteRoses
    for (let i = 0; i < 10; i++) {
      const type = i < 5 ? 'red' : 'white';
      const rose = new Rose(this.scene, type);
      this.add(rose);

      rose.setInteractive();
      this.scene.input.setDraggable(rose);
    }

    this.scene.input.on('dragstart', (pointer, gameObject) => {
      gameObject.setTint(0xeeeeee);
    });

    this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.scene.input.on('dragend', (pointer, gameObject) => {
      gameObject.clearTint();
    });
  }

  public resize(bg) {
    const vases = this.vases;

    vases.displayWidth = bg.displayWidth * 0.738
    vases.scaleY = vases.scaleX;
  }

  update() {

  }
}
