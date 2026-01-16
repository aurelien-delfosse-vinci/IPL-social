export class EmailChecker {
    isValidEmail(email: string): boolean {
        return this.doesEmailContainArobase(email) 
        && this.doesEmailContainSomethingBeforeArobase(email);
    }

    private doesEmailContainSomethingBeforeArobase(email: string): boolean {
        return email.indexOf('@') > 0;
    }

    private doesEmailContainArobase(email: string) {
        return email.includes('@');
    }
}