import { useState } from "react"

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const handleClickFlashcard = () => setFlip(!flip)

  return (
    <div 
      className={`card ${flip ? "flip" : ""}`}
      onClick={handleClickFlashcard}
    >
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option, index) => {
            return <div key={index} className="flashcard-option">{option}</div>
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  )
}
