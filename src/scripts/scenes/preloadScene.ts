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

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
