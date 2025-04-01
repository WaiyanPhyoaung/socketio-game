class PlayerData {
  constructor(playerName, settings) {
    this.playerName = playerName;
    this.locX = Math.floor(settings.worldWidth * Math.random() + 10);
    this.locY = Math.floor(settings.worldHeight * Math.random() + 10);
    this.radius = settings.defaultSize;
    this.color = this.getRandomColor();
    this.score = 0;
    this.orbsAbsorbed = 0;
  }
  getRandomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
export default PlayerData;
