import { EmailChecker } from "./emailChecker";

describe('emailChecker', () => {
    let emailChecker = new EmailChecker();
    describe('isValidEmail method', () => {

        it('should return false when the email does not contains at least one @', () => {

            let actual = emailChecker.isValidEmail('invalid.com');

            expect(actual).toBe(false);
        })

        it('should return false when the email has nothing before the @', () => {

            let actual = emailChecker.isValidEmail('@invalid.com');

            expect(actual).toBe(false);
        })

        it('should return false when the email has nothing after the @', () => {
            
            let actual = emailChecker.isValidEmail('invalid@');

            expect(actual).toBe(false);
        })

        it('should return false when the email does not contains at least one dot', () => {

            let actual = emailChecker.isValidEmail('invalid@invalidcom');

            expect(actual).toBe(false);
        })

        it('should return false when the email contains a dot who is the last character', () => {


            let actual = emailChecker.isValidEmail('invalid@invalid.');

            expect(actual).toBe(false); 
        })

        it('should return false when the email contains a space character', () => {

            let actual = emailChecker.isValidEmail('invalid @invalid.com');

            expect(actual).toBe(false);
        })

        it('should return true when the email is valid', () => {

            let actual = emailChecker.isValidEmail('valid@valid.com');
            
            
            expect(actual).toBe(true);
        })
    })
})