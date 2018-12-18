import { buggyFunction, returnFalse, returnTrue } from '../src/script';
import { expect } from 'chai';
import 'mocha';

describe('Script.ts', () => {
    describe('returnTrue', () => {
        it('should return true', () => {
            const result = returnTrue()
            expect(result).to.equal(true)
        })
    })

    describe('returnFalse', () => {
        it('should return false', () => {
            const result = returnFalse()
            expect(result).to.equal(false)
        })
    })

    describe('a function with an error in it', () => {
        /*
        when a function being tested throws an error, we should
        get a stack trace to the original typescript file, not the
        transpiled js file.
        */
        it('something should happen', () => {
            const result = buggyFunction()
            expect(!!result).to.equal(true)
        })
    })
})