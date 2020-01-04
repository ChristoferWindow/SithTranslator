import React from 'react';
import babyYoda from './img/baby_yoda.png';
import './BabyYoda.css';

class BabyYoda extends React.Component {

  handleClick = e => {
    const yoda = e.target.classList;
      yoda.add("babyYoda");

      setTimeout(() => { yoda.remove('babyYoda')}, 1000)
      // e.target.style.left+= 10;
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <img style={{width:"30px", height:"30px"}} src={babyYoda}/>
      </div>
    )
  }
}

export default BabyYoda;
