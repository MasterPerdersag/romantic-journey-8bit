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
  // Korrekte Pfadangabe mit exaktem Dateinamen und Groß-/Kleinschreibung
  this.load.image('background', 'assets/images/bg1.png.PNG');
}

function create() {
  // Hintergrundbild zentriert anzeigen
  const bg = this.add.image(400, 300, 'background');
  bg.setOrigin(0.5, 0.5);

  // Englischer Text
  this.add.text(80, 30, 'Happy Birthday\nWelcome to our little adventure', {
    font: '24px Arial',
    fill: '#ffffff',
    align: 'left'
  });

  // Persischer Text
  this.add.text(80, 120, 'تولدت مبارک\nبه ماجراجویی کوچک ما خوش آمدی', {
    font: '24px Arial',
    fill: '#ffcc00',
    align: 'left'
  });

  // Continue-Button
  const button = this.add.rectangle(400, 500, 220, 50, 0x2ecc71).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
    // hier kannst du z.B. eine neue Szene starten
  });
}

