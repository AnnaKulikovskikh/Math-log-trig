import Character from './character';

export default class MathChar extends Character {
  constructor(...params) {
    super(...params);
    this.distance = 11;
    this.state = false;
  }

  get stoned() {
    return this.state;
  }

  set stoned(boo) {
    this.state = true;
  }

  get attacker() {
    if (this.state) {
      this.attack = Math.round(this.attack - Math.log2(5));
    }
    this.attack = Math.round(this.attack - (this.attack * (this.distance - 1)) / 10);
    return this.attack;
  }

  set attacker(va) {
    this.baseAttack = this.attack;
  }
}