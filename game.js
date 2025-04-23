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
  // ACHTUNG: Stelle sicher, dass bg1.png im richtigen Ordner liegt!
  this.load.image('background', 'assets/images/bg1.png');
}

function create() {
  // Bild zentriert anzeigen
  this.add.image(400, 300, 'background').setOrigin(0.5, 0.5);

  // Englischer Text
  this.add.text(100, 50, 'My love, let’s begin our journey.', {
    font: '24px Arial',
    fill: '#ffffff',
    wordWrap: { width: 600 }
  });

  // Farsi-Untertitel
  this.add.text(100, 90, 'عزیزم، بیا سفرمون رو شروع کنیم.', {
    font: '24px Arial',
    fill: '#ffcc00',
    wordWrap: { width: 600 }
  });
}

