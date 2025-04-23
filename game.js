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
  // Hintergrundbild exakt platzieren – keine Skalierung oder Verschiebung
  this.add.image(0, 0, 'background').setOrigin(0, 0);

  // Unsichtbarer Button exakt über dem Continue-Button im Bild
  const button = this.add.rectangle(
    256,   // X-Mitte
    730,   // Y-Position nach Bildanalyse (leicht angepasst)
    140,   // Breite
    36,    // Höhe
    0xffffff,
    0.001  // Unsichtbar, aber klickbar
  ).setInteractive();

  button.on('pointerdown', () => {
    alert('Let the adventure begin!');
  });
}
