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
      this.sys.game.config.height - 30,  // Position 40px über dem Rand
      200,
      50,
      0x000000,
      0  // Alpha 0 = vollständig unsichtbar
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.scene.start('SecondScene');
    });
  }
}

class SecondScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SecondScene' });
  }

  preload() {
    this.load.image('background2', 'assets/images/bg2.png'); // Das nächste Hintergrundbild, falls du eines hast
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    // Falls du ein neues Hintergrundbild möchtest:
    if (this.textures.exists('background2')) {
      const bg = this.add.image(0, 0, 'background2').setOrigin(0, 0);
      bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [StartScene, SecondScene]
};

const game = new Phaser.Game(config);

// Lautstärke-Regler steuert globale Musik
document.getElementById('volumeSlider').addEventListener('input', (event) => {
  const volume = event.target.value;
  if (backgroundMusic) {
    backgroundMusic.setVolume(volume);
  }
});
