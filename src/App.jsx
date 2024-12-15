import { useEffect, useState } from "react"
import FlashcardList from "./FlashcardList"
import "./App.css"

function App() {

  useEffect(() => {
    (async () => {
      const url = "https://opentdb.com/api.php?amount=10"
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`status: ${response.status}`)
        }
        const json = await response.json()
        console.log(json)

        setFlashcard(
          json.results.map((questionItem, index) => {
            const correct_answer = questionItem.correct_answer;
            const options = [...questionItem.incorrect_answers, correct_answer]
            return {
              id: `${index}-${Date.now()}`,
              question: questionItem.question,
              answer: correct_answer,
              options: options.sort(() => Math.random() - 0.5)
            }
          })
        )
      } catch (error) {
        console.error("error en la llamada", error.message)
      }

    })();
      setTimeout(()=>{}, 1000)
  }, [])

  const [flashcard, setFlashcard] = useState(SAMPLE_DATA)

  return (
    <FlashcardList flashcards={flashcard}/>
  )
}

const SAMPLE_DATA = [
  {
    id: 1,
    question: "What's 2 + 2?",
    answer: "4",
    options: ["2", "3", "5", "4"]
  },
  {
    id: 2,
    question: "What's 3 + 2?",
    answer: "5",
    options: ["2", "3", "5", "4"]
  }
]

export default App
