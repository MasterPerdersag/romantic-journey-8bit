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
  const bg = this.add.image(400, 300, 'background');
  // Skaliert das Bild so, dass es die gesamte Fläche ohne schwarze Balken füllt
  bg.setScale(Math.max(800 / bg.width, 600 / bg.height));

  this.add.text(80, 30, 'Happy Birthday\nWelcome to our little adventure', {
    font: '24px Arial',
    fill: '#ffffff',
    align: 'left'
  });

  this.add.text(80, 120, 'تولدت مبارک\nبه ماجراجویی کوچک ما خوش آمدی', {
    font: '24px Arial',
    fill: '#ffcc00',
    align: 'left'
  });

  const button = this.add.rectangle(400, 500, 220, 50, 0x2ecc71).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
    // weitere Szene hier starten
  });
}
