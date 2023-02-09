//import Engineer constructor to test
const Engineer = require('../lib/Engineer');

//test creation of engineer object
describe('Engineer class', () => {
    it('Creates a new Engineer object'), () => {
        const engineer = new Engineer("Stanley", 67, "stantheman@gmail.com");
        expect(engineer.github).toEqual(expect.any(String));
    }
});

//test if getGithub retrieves engineer's github
describe('Engineer', () => {
    describe('getGithub', () => {
        it('should return engineer github', () => {
            const engineer = new Engineer("Stanley", 67, "stantheman@gmail.com");
            expect(engineer.getGithub()).toEqual(expect.any(String));
        });
    });
});

//test if getRole gets engineer's role
describe('Engineer', () => {
    describe('getRole', () => {
        it('should return employee role', () => {
            const engineer = new Engineer("Stanley", 67, "stantheman@gmail.com");
            expect(engineer.getGithub()).toEqual(expect("Engineer"));
        });
    });
});



