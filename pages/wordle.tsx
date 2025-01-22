import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar'
import WordleItem from '@/components/wordleitem';
import { words } from './const';

export default function Wordle() {
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState("");
   

    // startup choice for the answer
    useEffect(() => {

      var length = words.length;

      var choiceIdx = Math.floor(Math.random() * length);

      setAnswer(words[choiceIdx]);

    }
    , [])

    const [guess, setGuess] = useState(Array(6).fill(""));
    const [done, setDone] = useState(Array(6).fill(false));
    const [correct, setCorrect] = useState(false);
    const [full, setFull] = useState(false);

    useEffect( () => {
  
      console.log("answer", answer);
      console.log("")
      if (guess[index] == answer && answer != ""){
        setCorrect(true);
      }

    }
    , [guess, answer]);


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
            }
            return newGuesses;
          });
        
        }

        else if (letter === 'backspace') {
          setFull(false);
          setGuess((prev) => {
          const newGuesses = [...prev];
          newGuesses[index] = newGuesses[index].slice(0, -1);
          return newGuesses;
        })
      }
        
        else if ((letter == "enter" || letter == "Enter") && !correct && full)
        {

          setDone((prev) => {
            const newDone = [...prev];
            newDone[index] = true;
            return newDone;
          });
          setIndex((prev) => prev + 1);
        }

      };
     
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);

    }
    
    , [index, full])

    return (
      
     <div className="font-[family-name:var(--font-gloria-hallelujah)">
      <Navbar />
      

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

        {correct && done[index] && <div> Woah, congrats!! You got it. </div> }

      </div>

      </div>
    )}