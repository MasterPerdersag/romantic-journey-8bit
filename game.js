const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);

let backgroundMusic;

class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('background', 'assets/images/bg1.png.PNG');
    this.load.audio('bgMusic', 'assets/assets/audio/music.mp3');
  }

  create() {
    // Hintergrund
    const bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Musik nur einmal starten, wenn sie noch nicht läuft
    if (!backgroundMusic) {
      backgroundMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
      backgroundMusic.play();
    }

    // Lautstärkeregler
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', (event) => {
      if (backgroundMusic) {
        backgroundMusic.setVolume(event.target.value);
      }
    });

    // Unsichtbarer Button
    const buttonWidth = 146;
    const buttonHeight = 33;
    const buttonY = this.sys.game.config.height - 40; // Etwas höher gesetzt

    const button = this.add.rectangle(
      this.sys.game.config.width / 2,
      buttonY,
      buttonWidth,
      buttonHeight,
      0x000000,
      0 // Unsichtbar
    ).setInteractive();

    // Button klickbar machen
    button.on('pointerdown', () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0);

      this.cameras.main.once('camerafadeoutcomplete', () => {
        this.scene.start('GameScene');
      });
    });
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('background2', 'assets/images/bg2.png'); // Zweites Bild hier anpassen!
  }

  create() {
    // Neues Hintergrundbild für Szene 2
    const bg = this.add.image(0, 0, 'background2');
    bg.setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
  }
}
