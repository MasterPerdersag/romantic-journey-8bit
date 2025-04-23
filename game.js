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
  this.load.image('bg', 'assets/images/background.png');
}

function create() {
  this.add.image(400, 300, 'bg');
  this.add.text(100, 100, 'A Romantic Journey Begins...', {
    font: '20px Arial',
    fill: '#fff'
  });
}
