import Character from './character';
import MathChar from './math';

export default class Daemon extends MathChar {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defend = 40;
  }
}
