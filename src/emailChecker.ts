export class EmailChecker {
    isValidEmail(email: string): boolean {
        return email.includes('@') && email.indexOf('@') > 0;
    }
}