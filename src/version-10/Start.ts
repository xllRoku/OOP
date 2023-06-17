export class Start {
    private tokens: string[][];

    constructor(tokens: string[][]) {
        this.tokens = tokens;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tokens[i][j] = '_';
            }
        }
    }

    public write(): void {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                process.stdout.write(this.tokens[i][j] + ' ');
            }
            console.log();
        }
    }
}
