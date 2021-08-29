export default class Character {
  constructor(name) {
    if (name.length > 2 && name.length < 11 && typeof name === 'string') {
      this.name = name;
    } else {
      throw new Error('Unimplemented');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defend += this.defend * 0.2;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defend / 100);
    }
  }
}
