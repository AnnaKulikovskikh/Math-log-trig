import MathChar from './math';

export default class Magician extends MathChar {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defend = 40;
  }
}
