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
  this.load.audio('bgMusic', ['assets/assets/audio/music.mp3']);
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik abspielen
  backgroundMusic = this.sound.add('bgMusic', {
    loop: true,
    volume: 0.5
  });

  // Lautstärkeregler verbinden
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', function () {
    const volume = parseFloat(this.value);
    if (backgroundMusic) {
      backgroundMusic.setVolume(volume);
    }
  });

  // Unsichtbarer, klickbarer Bereich auf dem "Continue"-Feld im Bild
  const continueZone = this.add.zone(400, 570, 160, 35) // <- hier die Position angepasst
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => {
      if (!backgroundMusic.isPlaying) {
        backgroundMusic.play();
      }
      alert("Das Spiel beginnt gleich...");
    });
}
