import Vases from "../objects/gameplay/vases";
import UI from "../objects/ui/ui";

export default class MainScene extends Phaser.Scene {
  private bg: Phaser.GameObjects.Image;
  private ui: UI;
  private vases: Vases;

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.initBG();
    this.initUI();
    this.initVases();

    window.addEventListener('resize', () => this.resize());

    this.resize();
  }

  private initBG() {
    this.bg = this.add.image(0, 0, 'bg').setOrigin(0.5, 0.5);
  }

  private initUI() {
    this.ui = new UI(this);
    this.add.container(0, 0, this.ui);
  }

  private initVases() {
    this.vases = new Vases(this);
    this.add.container(0, 0, this.vases);
  }

  public resize() {
    const { bg, ui, vases } = this;
    this.game.scale.resize(window.innerWidth, window.innerHeight);

    const w = this.scale.width;
    const h = this.scale.height;

    bg.x = w * 0.5;
    bg.y = h * 0.5;

    bg.displayWidth = w;
    bg.scaleY = this.bg.scaleX;

    if(h > bg.displayHeight) {
      bg.displayWidth = w;
      bg.scaleY = this.bg.scaleX;
    }else{
      bg.displayHeight = h;
      bg.scaleX = this.bg.scaleY;
    }

    vases.x = this.scale.width * 0.5;
    vases.y = bg.y + bg.displayHeight * 0.07;

    ui.resize();
    vases.resize(bg);
  }

  update() {

  }
}
