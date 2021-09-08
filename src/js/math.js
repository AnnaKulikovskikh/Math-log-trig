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

  set stoned(state) {
    this.state = state;
  }

  get strike() {
    if (this.state) {
      this.striking = Math.round(this.attack - Math.log2(5));
      return this.striking;
    }
    this.striking = Math.round(this.attack - (this.attack * (this.distance - 1)) / 10);
    return this.striking;
  }

  set strike(attack) {
    this.striking = attack;
  }
}
