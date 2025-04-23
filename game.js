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
  this.load.audio('bgmusic', ['assets/audio/your-audio.mp3']); // Optional: Hintergrundmusik
}

function create() {
  // Hintergrundbild
  const bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0, 0);
  bg.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

  // Musik abspielen
  const music = this.sound.add('bgmusic', { loop: true });
  music.play();
  
  // Lautstärkeregler verbinden
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    music.setVolume(parseFloat(volumeSlider.value));
  });

  // Unsichtbarer Continue-Button (über dem eingebetteten Bild-Button)
  const buttonWidth = 146;
  const buttonHeight = 33;
  const button = this.add.rectangle(
    config.width / 2,
    534, // Feinjustierung: exakt über dem "Continue"-Feld im Bild
    buttonWidth,
    buttonHeight,
    0x000000,
    0 // voll transparent
  ).setInteractive();

  // Unsichtbarer Text (optional, kann komplett weggelassen werden)
