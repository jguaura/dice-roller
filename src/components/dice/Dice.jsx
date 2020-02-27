import React, { Component } from 'react';
import './Dice.css'

class Dice  extends Component {
    render(){
        let face = `dice fas fa-dice-${this.props.face} ${this.props.isRolling && 'wobble' }`
        return(
            <div>
                <i className={face}/>
            </div>
        )
    }
}

export default Dice;