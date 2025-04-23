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
  // Hintergrundbild laden
  this.load.image('background', 'assets/images/background.png');
}

function create() {
  // Bild mittig anzeigen (Canvas ist 800x600)
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
