const { it, expect } = require('@jest/globals')
const { describe } = require('yargs')
const reverse = require('./task2.js')

describe('reverse a string', () => {
    it('should reverse a string', () => {
        expect(reverse('Fantasy').toBe('ysatnaF'))
    });
});