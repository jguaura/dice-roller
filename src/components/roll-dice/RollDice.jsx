import React, { Component } from 'react';
import Dice from '../dice/Dice'
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props)
        this.roll = this.roll.bind(this)
        this.state = {
            dice1: 'one',
            dice2: 'two',
            isRolling: false
        }
    }
    roll() {
        const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        
        this.setState({dice1: newDice1, dice2: newDice2, isRolling: true})

        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000)
    }
    render(){
        return(
            <div className='roll_dice'>
                <div className='dice_container'>
                    <Dice face={this.state.dice1} isRolling={this.state.isRolling}/>
                    <Dice face={this.state.dice2}  isRolling={this.state.isRolling}/>
                </div>
                <div className='dice_button'>
                    <button onClick={this.roll} disabled={this.state.isRolling}>
                        {this.state.isRolling ? 'Rolling...' : 'Roll dice'}
                    </button>
                </div>
            </div>
        )
    }
}

export default RollDice;