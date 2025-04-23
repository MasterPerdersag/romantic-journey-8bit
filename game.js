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
  this.load.audio('bgmusic', ['assets/audio/your-audio.mp3']); // Pfad ggf. anpassen
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Hintergrundmusik
  const music = this.sound.add('bgmusic', { loop: true, volume: 0.5 });
  music.play();

  // Lautstärkeregler
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    music.setVolume(parseFloat(volumeSlider.value));
  });

  // UNSICHTBARER Klickbereich über dem Button im Bild
  const invisibleButton = this.add.zone(
    config.width / 2, // X-Zentrum
    534,               // Y-Position auf dem Button im Bild
    146,               // Breite des unsichtbaren Bereichs
    33                 // Höhe des unsichtbaren Bereichs
  ).setOrigin(0.5).setInteractive({ cursor: 'pointer' });

  invisibleButton.on('pointerdown', () => {
    alert('Das Spiel beginnt gleich...');
  });
}

