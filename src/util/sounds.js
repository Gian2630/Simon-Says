import useSound from 'use-sound'
import greenSound from '../sounds/green.mp3'
import redSound from '../sounds/red.mp3'
import yellowSound from '../sounds/yellow.mp3'
import blueSound from '../sounds/blue.mp3'

export function useGameSounds() {
  const [playGreen] = useSound(greenSound)
  const [playRed] = useSound(redSound)
  const [playYellow] = useSound(yellowSound)
  const [playBlue] = useSound(blueSound)

  const playSound = (color) => {
    switch (color) {
      case 'green':
        playGreen()
        break;
      case 'red':
        playRed()
        break;
      case 'yellow':
        playYellow()
        break;
      case 'blue':
        playBlue()
        break;
      default:
        break;
    }
  };

  return { playSound };
}