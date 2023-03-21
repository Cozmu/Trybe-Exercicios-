type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type BoardSquare = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const isInList = (element: any, list: any[]) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
};

abstract class Piece {
    protected _position: BoardSquare;
    abstract type: string;

    constructor(position: BoardSquare, protected board: Board) {
        this._position = position;
    };

    get position() { return this._position; }
    abstract get availableMoves(): BoardSquare[];

    move(newPosition: BoardSquare) {
        console.log(
            `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
        );
        if (!isInList(newPosition, this.availableMoves)) return false;
        this._position = newPosition;
        return true;
    }
}

class Pawn extends Piece {
    type = 'Peão';
    get availableMoves() {
        const column = this.position[0];
        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);
        if (rowIndex === 7)
            return [];

        const nextSquare: BoardSquare = [column, boardRows[rowIndex + 1]];
        if (isInList(nextSquare, this.board.occupiedSquares))
            return [];

        return [nextSquare];
    }
}

class Rook extends Piece {
    type = "Torre";
    get availableMoves() {
        const column = this.position[0];
        const columnIndex = boardColumns.indexOf(column);

        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);

        let availableSquares: BoardSquare[] = [];

        // Adiciona todas as casas abaixo
        for (let i = rowIndex - 1; i >= 0; i--) {
            const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(square, this.board.occupiedSquares)) break;
            availableSquares.push(square);
        }

        // Adiciona todas as casas acima
        for (let i = rowIndex + 1; i < 8; i++) {
            const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(square, this.board.occupiedSquares)) break;
            if (isInList(square, availableSquares)) continue;
            availableSquares.push(square);
        }

        // Adiciona todas as casas na direita
        for (let i = columnIndex + 1; i < 8; i++) {
            const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(square, this.board.occupiedSquares)) break;
            if (isInList(square, availableSquares)) continue;
            availableSquares.push(square);
        }

        // Adiciona todas as casas na esquerda
        for (let i = columnIndex - 1; i >= 0; i--) {
            const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(square, this.board.occupiedSquares)) break;
            if (isInList(square, availableSquares)) continue;
            availableSquares.push(square);
        }

        return availableSquares;
    }
}

class Board {
    pieces: Piece[] = [];

    constructor() {
        this.addPiece(new Pawn(['C', '2'], this));
        this.addPiece(new Rook(['F', '1'], this));
    }

    private addPiece(piece: Piece) {
        if (isInList(piece.position, this.occupiedSquares))
            return;
        this.pieces.push(piece);
    }
    get occupiedSquares() {
        return this.pieces.map((piece) => piece.position);
    }
}

let piece: Piece;

const board = new Board();
console.log(board);

const logPieceInfo = (piece: Piece) => {
    console.log(
        `----------------------
Peça: ${piece.type}
Posição: ${piece.position}
Movimentos disponíveis: ${piece.availableMoves.map(
            (b) => "[" + b + "]")
        }
Posições ocupadas no tabuleiro: ${board.occupiedSquares}`
    );
};

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);

piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);

