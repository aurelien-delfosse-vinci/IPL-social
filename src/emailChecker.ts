export class EmailChecker {
    isValidEmail(email: string): boolean {
        return this.doesEmailContainArobase(email) 
        && this.isArobaseFirstCharacter(email)
        && this.isArobaseLastCharacter(email) 
        && this.doesEmailContainDot(email)
        && this.isDotLastCharacter(email) 
        && !this.doesEmailcontainSpace(email);

    }

    private doesEmailcontainSpace(email: string): boolean {
        return email.includes(' ');
    }

    private isDotLastCharacter(email: string): boolean {
        return email.indexOf('.') < email.length - 1;
    }

    private doesEmailContainDot(email: string): boolean {
        return email.includes('.');
    }

    private isArobaseLastCharacter(email: string): boolean {
        return email.indexOf('@') < email.length - 1;
    }

    private isArobaseFirstCharacter(email: string): boolean {
        return email.indexOf('@') > 0;
    }

    private doesEmailContainArobase(email: string): boolean {
        return email.includes('@');
    }

}