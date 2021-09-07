import Daemon from '../daemon';

test('creation daemon', () => {
  const hero6 = new Daemon('Mimi');
  const expected = {
    name: 'Mimi',
    health: 100,
    level: 1,
    distance: 11,
    state: false,
    type: 'Daemon',
    attack: 10,
    defend: 40,
  };
  expect(hero6).toEqual(expected);
});

test('distant stoned attack', () => {
  const hero = new Daemon('Mimi');
  hero.distance = 3;
  hero.stoned = true;
  hero.attacker;
  expect(hero.strike).toBe(8);
});

test('stoned', () => {
  const hero = new Daemon('Mimi');
  hero.stoned = true;
  expect(hero.stoned).toBeTruthy();
});
