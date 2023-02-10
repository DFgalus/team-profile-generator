//import manager constructor to test
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('Creates a new Manager object', () => {
        const manager = new Manager("Bob", 15, "BobRoss@gmail.com", 6);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
});

//test getRole method to get employee role
describe('Manager class', () => {
    describe('getRole', () => {
        it('should return employee role', () => {
            const manager = new Manager("Bob", 15, "BobRoss@gmail.com", 6);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
