export default class Rose extends Phaser.GameObjects.Image {
  private vases: Phaser.GameObjects.Image;

  constructor(scene, type) {
    const frame = `${type}_rose`;

    super(scene, 0, 0, frame)
  }
}
