import { useState } from "react"
import FlashcardList from "./FlashcardList"
import "./App.css"

function App() {
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
