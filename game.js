const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Stelle sicher, dass der Bildname exakt so geschrieben ist!
  this.load.image('background', 'assets/images/bg1.png.PNG');
}

function create() {
  // Hintergrundbild zentriert anzeigen
  this.add.image(400, 300, 'background').setOrigin(0.5);

  // Englischer Text
  this.add.text(100, 40, 'Happy Birthday\nWelcome to our little adventure', {
    font: '24px Arial',
    fill: '#ffffff',
    align: 'center'
  });

  // Persischer Text
  this.add.text(100, 120, 'تولدت مبارک\nبه ماجراجویی کوچک ما خوش آمدی', {
    font: '24px Arial',
    fill: '#ffcc00',
    align: 'center'
  });

  // Continue-Button
  const button = this.add.rectangle(400, 500, 200, 50, 0x008866).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  // Button-Aktion
  button.on('pointerdown', () => {
    alert('Spiel beginnt!');
    // Hier kannst du später eine neue Scene starten
  });
}
