import { Move } from './Move';
import { Put } from './Put';
import { Start } from './Start';

export class TicTacToe {
    private tokens: string[][];
    public static COLOR: string[] = ['x', 'o'];
    private turn: number;
    private start: Start;
    private put: Put;
    private move: Move;

    constructor() {
        this.turn = 0;
        this.tokens = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.start = new Start(this.tokens);
        this.put = new Put(this.tokens);
        this.move = new Move(this.tokens);
    }

    public play(): void {
        do {
            this.start.write();
            if (!this.complete()) {
                this.put.put(this.turn, this);
            } else {
                this.move.move(this.turn, this);
            }
            this.turn = (this.turn + 1) % 2;
        } while (!this.existTicTacToe());
        this.start.write();
        this.win(this.turn);
    }

    public complete(): boolean {
        let contTokens = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tokens[i][j] != '_') {
                    contTokens++;
                }
            }
        }
        return contTokens === 6;
    }

    public existTicTacToe(): boolean | undefined {
        return (
            this.existTicTacToeByToken('x') || this.existTicTacToeByToken('0')
        );
    }

    public existTicTacToeByToken(token: string) {
        if (this.tokens[1][1] === token) {
            if (this.tokens[0][0] === token) {
                return this.tokens[2][2] === token;
            }
            if (this.tokens[0][2] === token) {
                return this.tokens[2][0] === token;
            }
            if (this.tokens[0][1] === token) {
                return this.tokens[2][1] === token;
            }
            if (this.tokens[1][0] === token) {
                return this.tokens[1][2] === token;
            }

            return false;
        }

        if (this.tokens[0][0] === token) {
            if (this.tokens[0][1] === token) {
                return this.tokens[0][2] === token;
            }
            if (this.tokens[1][0] === token) {
                return this.tokens[2][0] === token;
            }
            return false;
        }

        if (this.tokens[2][2] === token) {
            if (this.tokens[1][2] === token) {
                return this.tokens[0][2] === token;
            }
            if (this.tokens[2][1] === token) {
                return this.tokens[2][0] === token;
            }
            return false;
        }
    }

    public empty(row: number, column: number) {
        return this.tokens[row][column] === '_';
    }

    public full(row: number, column: number, token: string) {
        return this.tokens[row][column] === token;
    }

    public clear() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.tokens[i][j] = '_';
            }
        }
    }

    public win(turn: number): void {
        console.log(
            'Victoria!!!!! ' +
                TicTacToe.COLOR[turn] +
                '! ' +
                TicTacToe.COLOR[turn] +
                '! ' +
                TicTacToe.COLOR[turn] +
                '! Victoria!!!!!'
        );
    }
}
