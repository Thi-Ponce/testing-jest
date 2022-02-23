const { it, expect } = require('@jest/globals')
const { describe } = require('yargs')
const capitalize = require('./task4.js')

describe('capitalize', () => {
    it('should capitalize 1st letter', () => {
        expect(capitalize('fantasy').charAt(0)).toBe('F')
    })
})