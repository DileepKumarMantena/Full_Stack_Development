// math.test.js

const { add, subtract, mul } = require('./math');

test('add function adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 1)).toBe(0);
});

test('subtract function subtracts two numbers correctly', () => {
  expect(subtract(3, 2)).toBe(1);
  expect(subtract(0, 0)).toBe(0);
  expect(subtract(-1, 1)).toBe(-2);
});

test('mul function mul two numbers correctly', () => {
  expect(mul(1, 2)).toBe(2);
  expect(mul(0, 0)).toBe(0);
  expect(mul(1, 1)).toBe(1);
});
