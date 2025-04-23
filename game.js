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
}

function create() {
  // Hintergrundbild skaliert auf 800x600
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Englischer Text oben
  this.add.text(40, 20, 'Happy Birthday', {
    font: '28px Arial',
    fill: '#ffffff'
  });

  this.add.text(40, 60, 'Welcome to our little adventure', {
    font: '20px Arial',
    fill: '#ffffff'
  });

  // Farsi-Text etwas weiter unten
  this.add.text(40, 100, 'تولدت مبارک', {
    font: '24px Arial',
    fill: '#ffcc00'
  });

  this.add.text(40, 140, 'به ماجراجویی کوچک ما خوش آمدی', {
    font: '20px Arial',
    fill: '#ffcc00'
  });

  // "Continue"-Button zentriert am unteren Rand
  const button = this.add.rectangle(400, 550, 220, 50, 0x2ecc71).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}
