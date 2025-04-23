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
  this.load.image('bg', 'assets/images/background.png'); // Bild wird geladen
}

function create() {
  this.add.image(400, 300, 'bg'); // <-- Hier wird das Bild angezeigt (Mitte des Screens)

  this.add.text(100, 100, 'My love, let’s begin our journey.', {
    font: '20px Arial',
    fill: '#ffffff'
  });

  this.add.text(100, 140, 'عزیزم، بیا سفرمون رو شروع کنیم.', {
    font: '20px Arial',
    fill: '#ffcc00'
  });
}
