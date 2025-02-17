const { add } = require('../math.mjs')

test('that 1 plus 1 equals 2', () => {
  expect(add(1, 1)).toBe(2);
});
