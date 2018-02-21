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

    changeImage(id){
        console.log(id);
        //

        if(this.state.xIsNext){
            this.setState({
                xIsNext: false
            })
            document.getElementById(id).className='cross';
        }
        else {
            this.setState({
                xIsNext: true
         })
            document.getElementById(id).className='nought';
        }
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