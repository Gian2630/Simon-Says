import React from 'react'
import useSound from 'use-sound'
import greenSound from '../sounds/green.mp3';
import redSound from '../sounds/red.mp3'
import yellowSound from '../sounds/yellow.mp3'
import blueSound from '../sounds/blue.mp3'

const CardWrapper = ({ colorList, flashColor, onCardClick }) => {

  const [playGreen] = useSound(greenSound)
  const [playRed] = useSound(redSound)
  const [playYellow] = useSound(yellowSound)
  const [playBlue] = useSound(blueSound)

  const handleSound = (color) => {
    if (color === 'green') playGreen()
    if (color === 'red') playRed()
    if (color === 'yellow') playYellow()
    if (color === 'blue') playBlue()
  }

  return (
    <div className="CardWrapper">
      {colorList.map((color) => (
        <div
          key={color}
          className={`colorCard ${color} ${flashColor === color ? 'flash' : ''}`}
          onClick={() => {
            handleSound(color) 
            onCardClick(color)  
          }}
        />
      ))}
    </div>
  );
};

export default CardWrapper;