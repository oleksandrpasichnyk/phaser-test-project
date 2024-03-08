import TaskText from "./task-text";

export default class UI extends Phaser.GameObjects.Container {
  private bottomBgGraphics: Phaser.GameObjects.Graphics;
  private bottomBgRect: Phaser.Geom.Rectangle;

  private taskText: TaskText;
  private bottomBgStrokeWidth: number;

  constructor(scene) {
    super(scene)

    this.bottomBgStrokeWidth = 8;

    this.init();
  }

  private init() {
    this.initBottomUI();
  }

  private initBottomUI() {
    this.initBG();
    this.initTaskText();
  }

  private initBG() {
    this.bottomBgRect = new Phaser.Geom.Rectangle();
    this.bottomBgGraphics = this.scene.add.graphics({ lineStyle: { width: this.bottomBgStrokeWidth, color: 0xF7D761 }, fillStyle: { color: 0xF3BD50 } });
  }

  private initTaskText() {
    this.taskText = new TaskText(this.scene);
    this.scene.add.container(0, 0, this.taskText);
  }

  public resize() {
    const { bottomBgRect, bottomBgGraphics, bottomBgStrokeWidth, taskText } = this;
    bottomBgRect.width = this.scene.scale.width + bottomBgStrokeWidth * 2;
    bottomBgRect.height = 120;
    
    bottomBgGraphics.fillRectShape(bottomBgRect);
    bottomBgGraphics.strokeRectShape(bottomBgRect);

    bottomBgGraphics.x = -bottomBgStrokeWidth;
    bottomBgGraphics.y = this.scene.scale.height - bottomBgRect.height + bottomBgStrokeWidth;

    taskText.setPosition(30, bottomBgGraphics.y + bottomBgRect.height * 0.5)
  }
}
