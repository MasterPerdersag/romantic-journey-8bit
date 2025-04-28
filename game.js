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
    this.load.image('heart', 'assets/images/heart1.png'); 
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    const bg = this.add.image(0, 0, 'background4').setOrigin(0, 0);
    bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Herz-Animation
    const heart = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'heart');
    heart.setScale(0.5);

    this.tweens.add({
      targets: heart,
      y: heart.y - 200,
      alpha: { from: 1, to: 0 },
      duration: 2000,
      ease: 'Sine.easeInOut',
      repeat: 0
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

    // Optional: Du kannst hier eine weitere Animation oder Text einfügen

    const invisibleButton = this.add.rectangle(
      this.sys.game.config.width / 2,
      this.sys.game.config.height - 50,
      200,
      50,
      0x000000,
      0 
    ).setInteractive();

    invisibleButton.on('pointerdown', () => {
      // Hier könntest du zurück zur ersten Szene springen oder etwas anderes machen
      console.log('End of story!');
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [StartScene, SecondScene, ThirdScene, FourthScene, FifthScene]
};

const game = new Phaser.Game(config);

// Lautstärke-Regler steuert globale Musik
document.getElementById('volumeSlider').addEventListener('input', (event) => {
  const volume = event.target.value;
  if (backgroundMusic) {
    backgroundMusic.setVolume(volume);
  }
});
