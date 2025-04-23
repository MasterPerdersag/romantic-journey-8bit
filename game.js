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
  // Hintergrund exakt und ohne Skalierung anzeigen
  this.add.image(0, 0, 'background').setOrigin(0, 0);

  // Unsichtbarer Button exakt über dem "Continue"-Button im Bild
  const button = this.add.rectangle(
    256,   // X-Mitte des Bildes
    740,   // Y-Position (leicht über Mitte des sichtbaren Buttonbereichs)
    140,   // Breite des sichtbaren Buttonfelds im Bild
    36,    // Höhe
    0xffffff,
    0.001  // fast unsichtbar – nur als Klickfläche
  ).setInteractive();

  button.on('pointerdown', () => {
    alert('Let the adventure begin!');
  });
}
