import { TicTacToe } from './TicTacToe';

export class Move {
    private tokens: string[][];
    private bufferedReader: any;

    constructor(tokens: string[][]) {
        this.tokens = tokens;
        this.bufferedReader = require('readline-sync');
    }

    public move(turn: number, ticTacToe: TicTacToe): void {
        console.log('Movimiento del jugador ' + TicTacToe.COLOR[turn]);
        let row = 0;
        let column = 0;
        let ok = false;

        console.log('En qué casilla?');
        do {
            ok = false;
            do {
                try {
                    console.log('Fila? [1,3] : ');
                    row = parseInt(this.bufferedReader.question(), 10);
                    ok = true;
                } catch (ex) {
                    console.log(
                        'ERROR DE FORMATO! Introduzca un valor con formato entero.'
                    );
                }
            } while (!ok);
        } while (row < 1 || row > 3);

        do {
            ok = false;
            do {
                try {
                    console.log('Columna? [1,3] : ');
                    column = parseInt(this.bufferedReader.question(), 10);
                    ok = true;
                } catch (ex) {
                    console.log(
                        'ERROR DE FORMATO! Introduzca un valor con formato entero.'
                    );
                }
            } while (!ok);
        } while (column < 1 || column > 3);

        ok = ticTacToe.empty(row - 1, column - 1);
        if (!ok) {
            console.log('Esa casilla no está vacía');
        }

        if (ok) {
            this.tokens[row - 1][column - 1] = TicTacToe.COLOR[turn];
        }
    }
}
