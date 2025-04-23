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
  this.load.audio('music', ['assets/assets/audio/music.mp3']);
}

function create() {
  // Hintergrundbild anzeigen
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik vorbereiten
  backgroundMusic = this.sound.add('music', { loop: true, volume: 0.5 });

  // Lautstärkeregler verbinden
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    if (backgroundMusic) {
      backgroundMusic.setVolume(parseFloat(volumeSlider.value));
    }
  });

  // Unsichtbarer Button über dem "Continue"-Bereich im Bild (Position angepasst!)
  const button = this.add.rectangle(
    400, // X (zentriert)
    538, // Y (angepasst auf Position im Bild)
    160, // Breite des Bereichs
    30,  // Höhe des Bereichs
    0x000000,
    0 // vollständig transparent
  ).setInteractive();

  // Klick-Ereignis
  button.on('pointerdown', () => {
    if (!backgroundMusic.isPlaying) {
      backgroundMusic.play();
    }
    alert('Das Spiel beginnt gleich...');
  });
}
