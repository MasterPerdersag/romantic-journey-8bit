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
  backgroundMusic = this.sound.add('music', {
    loop: true,
    volume: parseFloat(document.getElementById('volumeSlider').value)
  });

  // Lautstärkeregler live anpassen
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    if (backgroundMusic) {
      backgroundMusic.setVolume(parseFloat(volumeSlider.value));
    }
  });

  // Unsichtbarer interaktiver Button (exakte Koordinaten für dein Bild!)
  const continueZone = this.add.zone(400, 538, 160, 30) // x, y, width, height
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true }) // Cursor-Hand bei Hover
    .on('pointerdown', () => {
      if (!backgroundMusic.isPlaying) {
        backgroundMusic.play();
      }
      alert("Das Spiel beginnt gleich...");
    });

  // Optional: Testweise visuell sichtbar machen (kann wieder entfernt werden)
  // this.add.rectangle(400, 538, 160, 30, 0x00ff00, 0.3);
}
