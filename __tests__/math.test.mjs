import { add, subtract } from '../src/math.mjs'

test('that 1 plus 1 equals 2', () => {
  expect(add(1, 1)).toBe(2);
});

test('that 1 minus 1 equals 0', () => {
  expect(subtract(1, 1)).toBe(0);
});
