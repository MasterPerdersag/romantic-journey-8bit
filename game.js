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
  this.load.audio('bgmusic', ['assets/audio/your-audio.mp3']); // Passe ggf. Dateiname an
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Hintergrundmusik abspielen
  const music = this.sound.add('bgmusic', { loop: true });
  music.play();

  // Lautstärkeregler steuern
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    music.setVolume(parseFloat(volumeSlider.value));
  });

  // UNSICHTBARER Button – kein Text, keine Farbe, keine Umrandung
  const invisibleButton = this.add.zone(
    config.width / 2,
    534, // exakt auf dem Button im Bild
    146,
    33
  ).setOrigin(0.5).setInteractive();

  invisibleButton.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}
