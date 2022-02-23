const { expect } = require('@jest/globals');
const { it } = require('jest-circus');
const { describe } = require('yargs');
const lengthCheck = require('./task.js');


describe('check length ', () => {
  test('check if the output is the string length', () => {
    const test = 'Fantasy';
    const check = (string) => lengthCheck(string);
    expect(check(string)).toBe(7);
  });

  test('error', () => {
    let errorTest = 'supercalifragilisticexpialidocious';
    const check = () => lengthCheck(errorTest);
    expect(check).toThrowError('string must be at least 1 character long and not longer than 10 characters');
  });
});
