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
  // Hintergrundbild im Originalmaßstab zentriert anzeigen
  const bg = this.add.image(config.width / 2, config.height / 2, 'background');
  bg.setOrigin(0.5, 0.5);

  // Transparenter Button exakt auf dem Continue-Bereich im Bild
  const button = this.add.rectangle(
    256,  // X-Mitte
    725,  // Y-Position manuell angepasst
    140,  // Breite
    36,   // Höhe
    0xffffff,
    0.001 // Unsichtbar
  ).setInteractive();

  button.on('pointerdown', () => {
    alert('Let the adventure begin...');
  });
}
