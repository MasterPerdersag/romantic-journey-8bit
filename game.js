const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: {
    preload,
    create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('background', 'assets/images/bg1.png.PNG');
  this.load.audio('bgMusic', 'assets/audio/music.mp3'); // 🎶 Musik laden
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik starten
  const music = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
  music.play();

  // Button
  const buttonWidth = 146;
  const buttonHeight = 33;
  const button = this.add.rectangle(
    config.width / 2,
    config.height - (buttonHeight / 2),
    buttonWidth,
    buttonHeight,
    0x2ecc71
  ).setInteractive();

  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '18px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}
