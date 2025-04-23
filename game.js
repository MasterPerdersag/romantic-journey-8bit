let backgroundMusic;

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
  this.load.audio('bgMusic', ['assets/audio/music.mp3']); // Passe Pfad ggf. an
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik
  backgroundMusic = this.sound.add('bgMusic', {
    loop: true,
    volume: document.getElementById('volumeSlider').value
  });
  backgroundMusic.play();

  // Musiklautstärke live anpassen
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', function () {
    backgroundMusic.setVolume(this.value);
  });

  // Button-Eigenschaften
  const buttonWidth = 146;
  const buttonHeight = 33;
  const button = this.add.rectangle(
    config.width / 2,
    config.height - (buttonHeight / 2),
    buttonWidth,
    buttonHeight,
    0x2ecc71
  ).setInteractive().setStrokeStyle(2, 0xffffff, 0.7).setShadow(2, 2, '#000', 4, false, true);

  // Text auf Button
  const buttonText = this.add.text(0, 0, 'Continue', {
    font: '18px Arial',
    fill: '#ffffff'
  });
  Phaser.Display.Align.In.Center(buttonText, button);

  // Klickfunktion
  button.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}
