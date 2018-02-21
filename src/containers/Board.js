import React from 'react';
import Square from '../components/Square';

class Board extends React.Component {

    constructor(){
        super()
        this.state = {
            xIsNext: true,
            squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            player1Moves:[],
            player2Moves:[]
        }
        this.changeImage = this.changeImage.bind(this)
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log(lines[0])
        for(let i = 0; i < lines.length; i++) {
            if (this.state.player1Moves.includes(lines[i][0]) && this.state.player1Moves.includes(lines[i][1]) &&
                this.state.player1Moves.includes(lines[i][2])) {
                console.log('Player 1 wins')
            }
            else if (this.state.player2Moves.includes(lines[i][0]) && this.state.player2Moves.includes(lines[i][1]) &&
                this.state.player2Moves.includes(lines[i][2])) {
                console.log('Player 2 wins')
            }
        }
    }

    changeImage(id){
        if(this.state.xIsNext){
            var newMoves1 = this.state.player1Moves.slice();
            newMoves1.push(id);
            this.setState({
                xIsNext: false,
                player1Moves: newMoves1
            })
            document.getElementById(id).className='nought';
        }
        else {
            var newMoves2 = this.state.player2Moves.slice();
            newMoves2.push(id);
            this.setState({
                xIsNext: true,
                player2Moves: newMoves2
         })
            document.getElementById(id).className='cross';
        }
        this.calculateWinner();
    }

    render(){
        return(
            <div>
                <h4>Astronauts and Crosses</h4>
                <div className='board-row'>
                    <Square id={this.state.squares[0]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[1]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[2]} onSquareClicked={this.changeImage}></Square>
                </div>
                <div className='board-row'>
                    <Square id={this.state.squares[3]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[4]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[5]} onSquareClicked={this.changeImage}></Square>
                </div>
                <div className='board-row'>
                    <Square id={this.state.squares[6]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[7]} onSquareClicked={this.changeImage}></Square>
                    <Square id={this.state.squares[8]} onSquareClicked={this.changeImage}></Square>
                </div>
            </div>

        )
    }
}

export default Board;