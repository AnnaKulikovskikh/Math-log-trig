import Character from '../character';
import Magician from '../magician';
import Daemon from '../daemon';

test('damage', () => {
  const hero6 = new Daemon('Mimi');
  hero6.damage(80);
  expect(hero6.health).toBe(52);
});

test('level up', () => {
  const hero6 = new Magician('Merlin');
  hero6.damage(80);
  hero6.levelUp();
  hero6.levelUp();
  const expected = {
    name: 'Merlin',
    health: 100,
    level: 3,
    distance: 11,
    state: false,
    type: 'Magician',
    attack: 14.4,
    defend: 57.6,
  };
  expect(hero6).toEqual(expected);
});

test('killed', () => {
  const hero6 = new Daemon('Mimi');
  hero6.damage(800);
  hero6.levelUp();
  const expected = {
    name: 'Mimi',
    health: -380,
    level: 1,
    distance: 11,
    state: false,
    type: 'Daemon',
    attack: 10,
    defend: 40,
  };
  expect(hero6).toEqual(expected);
});

test.each([
  ['M'],
  ['MarambaLumumba518'],
  [15],
])('check name', (name) => {
  expect(() => new Daemon(name)).toThrowError('Unimplemented');
});
