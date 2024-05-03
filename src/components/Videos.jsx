import React from 'react'

const Videos = ({
    answerState,
    video
  }) => {
  return (
    <div id='videos'>
    {(answerState === "correct") && 
    <img src={video} alt="success gif" />
    }
    {(answerState === "wrong") && 
    <img src="https://media.giphy.com/media/l0HlTtfLvP6HfLvH2/giphy.gif" alt="wrong gif" />
    }
    </div>
  )
}

export default Videos