import React from 'react';

interface WordleItemProps {
    wordChosen: string,
    wordAnswer: string, 
    done: boolean[],
    idx: number,
  }

const WordleItem: React.FC<WordleItemProps> = (
    {wordAnswer, wordChosen, done, idx}
) => {

    const colorPicker = (answer:string, choice:string, idx:number) =>{

        if (answer[idx] == choice[idx]){
            return "green";
        }
        else if (answer.includes(choice[idx])){
            return "gold";
        }
        else{
            return "red";
        }

    };
    
    return (
    <div  className='wordleRow'>
    {wordAnswer.split('').map((item, index) =>

    (
        
    done[idx] ? 
        (<div key={index} className='wordleItem'>
                <span className='font' style={{backgroundColor: colorPicker(wordAnswer, wordChosen, index), color:'white'}}> {wordChosen.split('')[index]} </span>
        </div>)
    : 
    (<div key={index} className='wordleItem'>
                <span className='font'> {wordChosen.split('')[index]} </span>
    </div>)

    )
    )

        
    }

    </div>
); 

};

export default WordleItem;