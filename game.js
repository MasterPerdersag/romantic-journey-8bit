const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 768,
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
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(config.width, config.height);

  // Transparenter Button genau auf dem grafischen "Continue"
  const button = this.add.rectangle(
    256,  // Mitte des Bildes (X)
    720,  // Y-Position knapp über dem unteren Rand, exakt auf dem Bild-Button
    140,  // Breite passend zum Button im Bild
    36,   // Höhe des Buttons
    0xffffff,
    0.001 // Fast komplett transparent
  ).setInteractive();

  button.on('pointerdown', () => {
    alert('Let the adventure begin...');
    // Hier kannst du später zur nächsten Szene wechseln
  });
}
