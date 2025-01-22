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


    useEffect(() => {

      const handleKey = (e: KeyboardEvent) =>
      {

        const letter = e.key.toLowerCase();

        if (/^[a-z]$/.test(letter)){
          console.log("letter", letter);
          console.log("guess in add", guess);
          console.log("index", index);
          setGuess(prev => {
            const newGuesses = [...prev];
            if ((newGuesses[index] + letter).length <= 5)
            {
            newGuesses[index] += letter;
            }
            return newGuesses;
          });
        
        }

        else if (letter === 'backspace') {
          setGuess((prev) => {
          const newGuesses = [...prev];
          newGuesses[index] = newGuesses[index].slice(0, -1);
          return newGuesses;
        })
      }

        else if (letter == "enter")
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
    
    , [index])

    console.log("guess", guess);
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
          />

        </div>
          
        )

        )

        }

      </div>

      </div>
    )}