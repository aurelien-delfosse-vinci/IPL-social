import { emit } from "node:cluster";
import { EmailChecker } from "./emailChecker";

describe('emailChecker', () => {
    describe('isValidEmail method', () => {

        it('should return false when the email does not contains at least one @', () => {
            let emailChecker = new EmailChecker();

            let actual = emailChecker.isValidEmail('invalid.com');

            expect(actual).toBe(false);
        });

        it('should return false when the email has nothing before the @', () => {

            let emailChecker = new EmailChecker();

            let actual = emailChecker.isValidEmail('@invalid.com');

            expect(actual).toBe(false);
        });
    });
})