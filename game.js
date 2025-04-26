let globalMusic; // Musik-Objekt außerhalb der Szenen

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  preload() {
    this.load.image('background', 'assets/images/bg1.png.PNG');
    this.load.audio('backgroundMusic', 'assets/assets/audio/music.mp3');
  }

  create() {
    // Hintergrund
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Musik nur starten, wenn sie noch nicht läuft
    if (!globalMusic) {
      globalMusic = this.sound.add('backgroundMusic', {
        loop: true,
        volume: 0.5
      });
      globalMusic.play();
    }

    // Lautstärkeregler
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', (event) => {
      const volume = parseFloat(event.target.value);
      globalMusic.setVolume(volume);
    });

    // Unsichtbarer Button
    const buttonWidth = 146;
    const buttonHeight = 33;
    const buttonY = this.sys.game.config.height - 50;

    const button = this.add.rectangle(
      this.sys.game.config.width / 2,
      buttonY,
      buttonWidth,
      buttonHeight,
      0x000000,
      0 // Unsichtbar
    ).setInteractive();

    const buttonText = this.add.text(0, 0, 'Continue', {
      font: '18px Arial',
      fill: '#ffffff'
    });
    Phaser.Display.Align.In.Center(buttonText, button);

    button.on('pointerdown', () => {
      // Fade out → Szenewechsel
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
    this.load.image('newBackground', 'assets/images/bg2.png');
  }

  create() {
    const bg = this.add.image(0, 0, 'newBackground').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Musik weiter verwenden
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', (event) => {
      const volume = parseFloat(event.target.value);
      if (globalMusic) globalMusic.setVolume(volume);
    });

    // Fade in Szene
    this.cameras.main.fadeIn(1000, 0, 0, 0);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [TitleScene, GameScene]
};

const game = new Phaser.Game(config);
