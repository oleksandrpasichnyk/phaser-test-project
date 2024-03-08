export default class TaskText extends Phaser.GameObjects.Container {
  private text1: Phaser.GameObjects.Text;
  private text2: Phaser.GameObjects.Text;

  private icon1: Phaser.GameObjects.Image;
  private icon2: Phaser.GameObjects.Image;

  private whiteRosesCount: number = 0;
  private redRosesCount: number = 0;

  constructor(scene) {
    super(scene, 0, 0)

    this.scene = scene;

    this.init();
  }

  public setCount(redRosesCount: number, whiteRosesCount: number) {
    this.redRosesCount = redRosesCount;
    this.whiteRosesCount = whiteRosesCount;

    this.updateText();
  }

  private init() {
    this.text1 = this.createText();
    this.text2 = this.createText();
    this.icon1 = this.createIcon('red_rose_preview');
    this.icon2 = this.createIcon('white_rose_preview');

    this.setCount(2, 3)
  }

  private createText(): Phaser.GameObjects.Text {
    const text = this.scene.add.text(0, 0, '', this.getTextStyle());
    text.setOrigin(0, 0.5);

    this.add(text);

    return text;
  }

  private createIcon(fileName: string): Phaser.GameObjects.Image {
    const icon = this.scene.add.image(0, 0, fileName).setOrigin(0, 0.5);
    this.add(icon);
    icon.setScale(0.2, 0.2)

    return icon;
  }

  private updateText() {
    this.text1.text = 'Збери букет із ' + this.redRosesCount;
    this.text2.text = 'та ' + this.whiteRosesCount;

    this.updatePositions();
  }

  private updatePositions() {
    const { text1, text2, icon1, icon2 } = this;
    const offset = 15;

    icon1.x = text1.getTopRight().x + offset;
    text2.x = icon1.getTopRight().x + offset;
    icon2.x = text2.getTopRight().x + offset;
  }

  private getTextStyle() {
    return {
      font: '40px Sans-serif',
      color: '#ffffff',
      shadow: {
          offsetX: 1,
          offsetY: 2,
          color: '#555',
          blur: 2,
          stroke: true,
          fill: true
      }
    }
  }
}