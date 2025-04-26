let backgroundMusic; // globale Variable für die Musik

class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('background', 'assets/images/bg1.png.PNG');
    this.load.audio('backgroundMusic', 'assets/assets/audio/music.mp3');
  }

  create() {
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Musik nur starten, wenn sie noch nicht läuft
    if (!backgroundMusic) {
      backgroundMusic = this.sound.add('backgroundMusic', { loop: true, volume: 0.5 });
      backgroundMusic.play();
    }

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 15,
      200,
      50,
      0x000000,
      0 // komplett unsichtbar
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('SecondScene');
      });
    });
  }
}

class SecondScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SecondScene' });
  }

  preload() {
    this.load.image('background2', 'assets/images/bg2.png');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    const bg = this.add.image(0, 0, 'background2').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0 // unsichtbar
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('ThirdScene');
      });
    });
  }
}

class ThirdScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ThirdScene' });
  }

  preload() {
    this.load.image('background3', 'assets/images/bg3.png.PNG'); // Achte auf PNG Großschreibung
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    const bg = this.add.image(0, 0, 'background3').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50, // gleiche Position wie in Szene 2
      200,
      50,
      0x000000,
      0 // unsichtbar
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('FourthScene');
      });
    });
  }
}

class FourthScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FourthScene' });
  }

  preload() {
    this.load.image('background4', 'assets/images/bg4.png'); // Dein nächstes Bild (achte auf Dateiname)
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    const bg = this.add.image(0, 0, 'background4').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Hier kannst du weitere Inhalte für Szene 4 ergänzen
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [StartScene, SecondScene, ThirdScene, FourthScene]
};

const game = new Phaser.Game(config);

// Lautstärke-Regler steuert globale Musik
document.getElementById('volumeSlider').addEventListener('input', (event) => {
  const volume = event.target.value;
  if (backgroundMusic) {
    backgroundMusic.setVolume(volume);
  }
});
