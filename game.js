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

let backgroundMusic;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('background', 'assets/images/bg1.png.PNG');
  this.load.audio('bgmusic', ['assets/assets/audio/music.mp3']);
}

function create() {
  // Hintergrundbild anzeigen
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik laden
  backgroundMusic = this.sound.add('bgmusic', {
    loop: true,
    volume: 0.5
  });

  // Lautstärkeregler mit HTML verbinden
  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      const volume = parseFloat(volumeSlider.value);
      backgroundMusic.setVolume(volume);
    });
  }

  // Unsichtbarer Button exakt unterhalb des sichtbaren "Continue"-Bereichs im Bild
  const continueZone = this.add.zone(400, 750, 160, 30) // x, y, Breite, Höhe
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => {
      if (!backgroundMusic.isPlaying) {
        backgroundMusic.play();
      }
      alert("Das Spiel beginnt gleich...");
    });
}
