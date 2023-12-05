import React from "react"
import words from "./data/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function App() {
  const[wordList, setWordList] = React.useState("")

  function changeWord(){

    setWordList(()=>{
        return words[Math.floor(Math.random() * words.length)]
    } )
  }
  // changeWord()
  console.log(wordList)
  return (
    <>
      <div style={{
        maxWidth:"800px",
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        margin:"0 auto",
        alignItems:"center"

      }}>
        <div style={{ fontSize:"2rem", textAlign:"center"}}>
          Lose Win
        </div>

        <HangmanDrawing/>
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  )
}

export default App
