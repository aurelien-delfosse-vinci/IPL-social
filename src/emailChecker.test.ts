import { emit } from "node:cluster";
import { EmailChecker } from "./emailChecker";

describe('emailChecker', () => {
    let emailChecker = new EmailChecker();
    describe('isValidEmail method', () => {

        it('should return false when the email does not contains at least one @', () => {

            let actual = emailChecker.isValidEmail('invalid.com');

            expect(actual).toBe(false);
        });

        it('should return false when the email has nothing before the @', () => {

            let actual = emailChecker.isValidEmail('@invalid.com');

            expect(actual).toBe(false);
        });

        it('should return false when the email has nothing after the @', () => {
            
            let actual = emailChecker.isValidEmail('invalid@');

            expect(actual).toBe(false);
        });
    });
})