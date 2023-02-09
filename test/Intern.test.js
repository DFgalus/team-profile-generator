//import Intern constructor to test
const Intern = require('../lib/Intern');

//test Intern object creation
describe('Intern class', () => {
    it('Creates a new Intern object'), () => {
        const intern = new Intern("Bob", 15, "BobRoss@gmail.com");
        expect(intern.school).toEqual(expect.any(String));
    }
});

//test get school method
describe('Intern', () => {
    describe('getSchool', () => {
        it('should return intern school', () => {
            const intern = new Intern("Bob", 15, "BobRoss@gmail.com");
            expect(intern.getSchool()).toEqual(expect.any(String));
        });
    });
});

//test getRole method
describe('Intern', () => {
    describe('getRole', () => {
        it('should return employee role', () => {
            const intern = new Intern("Bob", 15, "BobRoss@gmail.com");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
