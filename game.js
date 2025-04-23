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
  this.load.image('background', 'assets/images/bg1.png.PNG');
}

function create() {
  // Hintergrundbild korrekt skalieren
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // "Continue"-Button zentriert unten
  const button = this.add.rectangle(400, 550, 220, 50, 0x2ecc71).setInteractive();
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '20px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
    // Hier später neue Szene starten
  });
}
