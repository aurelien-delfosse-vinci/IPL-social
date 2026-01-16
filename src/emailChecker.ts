export class EmailChecker {
    isValidEmail(email: string): boolean {
        return this.doesEmailContainArobase(email) 
        && this.doesEmailContainSomethingBeforeArobase(email)
        && email.indexOf('@') < email.length - 1 
        && email.includes('.') 
        && email.indexOf('.') < email.length - 1 
        && !email.includes(' ');

    }

    private doesEmailContainSomethingBeforeArobase(email: string): boolean {
        return email.indexOf('@') > 0;
    }

    private doesEmailContainArobase(email: string) {
        return email.includes('@');
    }

}