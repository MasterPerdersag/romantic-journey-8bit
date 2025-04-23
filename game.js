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
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Button-Daten
  const buttonWidth = 146;
  const buttonHeight = 33;

  // Button erstellen
  const button = this.add.rectangle(
    config.width / 2,
    config.height - (buttonHeight / 2),
    buttonWidth,
    buttonHeight,
    0x2ecc71
  ).setInteractive();

  // Text mit Schatten
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '18px Arial',
    fill: '#ffffff'
  });
  buttonText.setShadow(2, 2, '#000000', 2, false, true);
  Phaser.Display.Align.In.Center(buttonText, button);

  // Klickfunktion
  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}

