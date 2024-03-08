export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('bg', 'assets/img/bg.png');
    this.load.image('vases', 'assets/img/vases.png');
    this.load.image('red_rose_preview', 'assets/img/red_rose_preview.png');
    this.load.image('white_rose_preview', 'assets/img/white_rose_preview.png');
    this.load.image('red_rose', 'assets/img/red_rose.png');
    this.load.image('white_rose', 'assets/img/white_rose.png');
  }

  create() {
    this.scene.start('MainScene')
  }
}
