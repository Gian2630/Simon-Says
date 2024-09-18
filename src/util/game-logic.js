import { useState, useEffect } from "react"
import timeout from "./util"

const GameLogic = (colorList, difficulty, isOn) => {
  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("")

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true })
    } else {
      setPlay(initPlay)
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * colorList.length)]
      const copyColors = [...play.colors]
      copyColors.push(newColor)
      setPlay({ ...play, colors: copyColors })
    }
  }, [isOn, play.isDisplay])

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors()
    }
  }, [isOn, play.isDisplay, play.colors.length])

  const displayColors = async () => {
    const delay = 1000 / difficulty
    await timeout(1000)

    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i])

      await timeout(delay)
      setFlashColor("")
      await timeout(delay)

      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors]
        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  };

  const cardClickHandle = async (color) => {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors]
      const lastColor = copyUserColors.pop()
      setFlashColor(color)

      const delay = 1000 / difficulty

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors })
        } else {
          await timeout(delay)
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(500)
        setPlay({ ...initPlay, score: play.colors.length })
      }
      await timeout(500)
      setFlashColor("")
    }
  };

  return { play, flashColor, cardClickHandle }
};

export default GameLogic;
