import Magician from '../magician';

test('creation magician', () => {
  const hero3 = new Magician('Strange');
  const expected = {
    name: 'Strange',
    health: 100,
    level: 1,
    distance: 11,
    state: false,
    type: 'Magician',
    attack: 10,
    defend: 40,
  };
  expect(hero3).toEqual(expected);
});

test('distant attack', () => {
  const hero = new Magician('Strange');
  hero.distance = 3;
  hero.attacker;
  expect(hero.baseattack).toBe(8);
});
