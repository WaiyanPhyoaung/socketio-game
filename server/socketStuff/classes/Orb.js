class Orb {
  constructor(settings) {
    this.color = this.getRandomColor();
    this.locX = Math.floor(Math.random() * settings.worldWidth);
    this.locY = Math.floor(Math.random() * settings.worldHeight);
    this.radius = settings.genericOrbSize;
  }
  getRandomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
export default Orb;
