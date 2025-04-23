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
  // Lade das korrekt benannte Bild
  this.load.image('background', 'assets/images/bg1.png.PNG');
  this.load.image('button', 'assets/images/button.png'); // Optional: Button-Grafik
}

function create() {
  // Hintergrundbild einfügen
  this.add.image(400, 300, 'background').setOrigin(0.5);

  // Text anzeigen (englisch + farsi)
  this.add.text(100, 40, 'Happy Birthday\nWelcome to our little adventure', {
    font: '24px Arial',
    fill: '#ffffff',
    align: 'center'
  });

  this.add.text(100, 120, 'تولدت مبارک\nبه ماجراجویی کوچک ما خوش آمدی', {
    font: '24px Arial',
    fill: '#ffcc00',
    align: 'center'
  });

  // Einfacher Continue-Button (Rechteck + Text)
  const button = this.add.rectangle(400, 500, 200, 50, 0x007f5f).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Spiel startet… (hier kommt dein nächster Scene-Code)');
    // Hier kann später die nächste Szene starten
  });
}
