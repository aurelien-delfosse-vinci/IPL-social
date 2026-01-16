export class EmailChecker {
    isValidEmail(email: string): boolean {
        return email.includes('@');
    }
}