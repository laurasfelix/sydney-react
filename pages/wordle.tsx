import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar'
import WordleItem from '@/components/wordleitem';
import { words } from './const';

export default function Wordle() {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [clickedPlay, setClickedPlay] = useState(false);
   

    // startup choice for the answer
    useEffect(() => {

      setClickedPlay(false);

      const length = words.length;

      const choiceIdx = Math.floor(Math.random() * length);

      setAnswer(words[choiceIdx]);


    }
    , [])

    const handleClick = () => {

      setClickedPlay(true);
      return;

    };

    const [guess, setGuess] = useState(Array(6).fill(""));
    const [done, setDone] = useState(Array(6).fill(false));
    const [correct, setCorrect] = useState(false);
    const [full, setFull] = useState(false);
    console.log(answer);

    useEffect( () => {
  
      if (guess[index] == answer && answer != ""){
        setCorrect(true);
      }
      else{
        setCorrect(false);
      }

    console.log("value of correct", correct, "guess", guess, "done", done);

    }
    , [guess]);


    console.log("answer: {", answer, "} guess: {", guess, "} correct: {", correct, "} full : {", full, "} done: ", done);

    useEffect(() => {

      const handleKey = (e: KeyboardEvent) =>
      {
        
       
        const letter = e.key.toLowerCase();

        if (/^[a-z]$/.test(letter) && !correct && !done.every(Boolean)){
          setGuess(prev => {
            
            const newGuesses = [...prev];
            if ((newGuesses[index] + letter).length <= 5)
            {
              if ((newGuesses[index] + letter).length == 5)
              {
                setFull(true);
              }
              else{
                setFull(false);
              }
            newGuesses[index] += letter;

            if (newGuesses[index] == answer && answer != "")
            {
              setCorrect(true);
            }
            else{
              setCorrect(false);
            }
            }
            return newGuesses;
          });
        
        }

        else if (letter === 'backspace') {
          setFull(false);
          setCorrect(false);
          setGuess((prev) => {
          const newGuesses = [...prev];
          newGuesses[index] = newGuesses[index].slice(0, -1);
          return newGuesses;
        })
      }
        
        else if ((letter == "enter" || letter == "Enter") && !done[index] && full && guess[index] != "")
        {
          setDone((prev) => {
            const newDone = [...prev];
            newDone[index] = true;
            return newDone;
          });
          if (guess[index] != answer){
          setCorrect(false);
          setIndex((prev) => prev + 1);
          }
        }

      };
     
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);

    }
    
    , [index, full])

    return (
      
     <div className="font-[family-name:var(--font-gloria-hallelujah)">
      <Navbar />

      {
        !clickedPlay &&
        <div className='play'>
          <div className="grid">
            <div className="cell white"></div>
            <div className="cell white"></div>
            <div className="cell white"></div>
            <div className="cell green"></div>
            <div className="cell yellow"></div>
            <div className="cell green"></div>
            <div className="cell green"></div>
            <div className="cell green"></div>
            <div className="cell green"></div>
          </div>
          <div className='welcome-wordle title-hover'> Hey there. </div>
          <span className='title-hover'>Get 6 (SIX) chances to guess a Sydney-related 5-letter word.</span>
          <div className='playButton title-hover'> <button onClick={handleClick}> play </button> </div>
        </div>
      }
      
        {clickedPlay && <div className='wordleContainer'>

          <div className='wordle'>

            {guess.map((item, idx) =>

            (
              //this shows each wordle item one by one
            <div key={idx}>

              <WordleItem
                  wordChosen={item}
                  wordAnswer={answer}
                  done={done}
                  idx={idx}
                />

            </div>
              
            )

            )

            }


          </div>

              <div className='msg'>

              {correct && done[index] && <div className='congrats'> Woah, congrats!! You got it. </div> }

              {!correct && done.every(Boolean) && <div className='notcongrats'> Oops :( it&apos;s {answer}... </div>}

              </div>

        </div>}

      </div>
    )}