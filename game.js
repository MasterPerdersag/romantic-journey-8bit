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
  // Hintergrundbild wird exakt auf 800x600 gestreckt
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Englischer Text
  this.add.text(80, 30, 'Happy Birthday\nWelcome to our little adventure', {
    font: '24px Arial',
    fill: '#ffffff',
    align: 'left'
  });

  // Farsi-Text
  this.add.text(80, 120, 'تولدت مبارک\nبه ماجراجویی کوچک ما خوش آمدی', {
    font: '24px Arial',
    fill: '#ffcc00',
    align: 'left'
  });

  // "Continue"-Button
  const button = this.add.rectangle(400, 500, 220, 50, 0x2ecc71).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
    // Hier kannst du in die nächste Szene springen
  });
}
