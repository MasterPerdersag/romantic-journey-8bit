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
  this.load.audio('bgmusic', ['assets/audio/your-audio.mp3']); // Passe den Pfad ggf. an
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik starten
  const music = this.sound.add('bgmusic', { loop: true, volume: 0.5 });
  music.play();

  // Lautstärke-Slider verbinden
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    music.setVolume(parseFloat(volumeSlider.value));
  });

  // Unsichtbarer, aber interaktiver Button
  const buttonZone = this.add.zone(
    config.width / 2,
    534, // exakt auf Button-Höhe im Bild
    146,
    33
  ).setOrigin(0.5).setInteractive({ cursor: 'pointer' });

  // Optional: Debug-Rahmen für Button-Position (zum Testen)
  // this.add.graphics().lineStyle(1, 0xff0000).strokeRectShape(buttonZone.getBounds());
