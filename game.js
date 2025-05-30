let backgroundMusic; // globale Variable für die Musik

class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('background', 'assets/images/bg1.png.PNG');
    this.load.audio('backgroundMusic', 'assets/assets/audio/music.mp3');
    this.load.image('heart', 'assets/images/heart1.png');
    this.load.image('easteregg', 'assets/images/easteregg.png'); // Osterbild
  }

  create() {
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

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
      0
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
      0
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
    this.load.image('background3', 'assets/images/bg3.PNG');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background3').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0
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
    this.load.image('background4', 'assets/images/bg4.png');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background4').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const heart = this.add.image(this.sys.game.config.width / 2, 500, 'heart').setScale(0.25);
    this.tweens.add({
      targets: heart,
      y: 200,
      duration: 2000,
      ease: 'Sine.easeInOut',
      yoyo: false,
      repeat: -1
    });

    heart.setInteractive();
    heart.on('pointerdown', () => {
      const egg = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'easteregg').setAlpha(0).setScale(0.8).setOrigin(0.5);
      this.tweens.add({ targets: egg, alpha: 1, duration: 500 });
      this.time.delayedCall(2000, () => {
        this.tweens.add({
          targets: egg,
          alpha: 0,
          duration: 500
        });
      });
    });

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('FifthScene');
      });
    });
  }
}

class FifthScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FifthScene' });
  }

  preload() {
    this.load.image('background5', 'assets/images/bg5.png');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background5').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('SixthScene');
      });
    });
  }
}

class SixthScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SixthScene' });
  }

  preload() {
    this.load.image('background6', 'assets/images/bg6.png');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background6').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('SeventhScene');
      });
    });
  }
}

class SeventhScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SeventhScene' });
  }

  preload() {
    this.load.image('background7', 'assets/images/bg7.png');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background7').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    this.add.text(
      this.sys.game.config.width / 2,
      500,
      'Just one last surprise...',
      { font: '28px Arial', fill: '#ffffff' }
    ).setOrigin(0.5);

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      this.cameras.main.fadeOut(800, 0, 0, 0);
      this.time.delayedCall(800, () => {
        this.scene.start('EighthScene');
      });
    });
  }
}

class EighthScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EighthScene' });
  }

  preload() {
    this.load.image('background8', 'assets/images/bg8.png');
  }

  create() {
    this.cameras.main.fadeIn(1500, 0, 0, 0);
    const bg = this.add.image(0, 0, 'background8').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    for (let i = 0; i < 15; i++) {
      const heart = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(-100, -10), 'heart').setScale(0.25);
      this.tweens.add({
        targets: heart,
        y: 600,
        duration: Phaser.Math.Between(3000, 5000),
        delay: Phaser.Math.Between(0, 2000),
        repeat: -1,
        ease: 'Linear'
      });
    }

    const restartButton = this.add.text(650, 560, 'Restart', {
      font: '18px Arial',
      fill: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 10, y: 5 },
      borderRadius: 5
    }).setInteractive();

    restartButton.on('pointerdown', () => {
      this.scene.start('StartScene');
    });
  }
}

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  parent: 'game-container',
  scene: [
    StartScene,
    SecondScene,
    ThirdScene,
    FourthScene,
    FifthScene,
    SixthScene,
    SeventhScene,
    EighthScene
  ]
};

const game = new Phaser.Game(config);

document.getElementById('volumeSlider').addEventListener('input', (event) => {
  const volume = event.target.value;
  if (backgroundMusic) {
    backgroundMusic.setVolume(volume);
  }
});
