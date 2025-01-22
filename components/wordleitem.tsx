import React from 'react';

interface WordleItemProps {
    wordChosen: string,
    wordAnswer: string, 
    done: boolean[],
  }

const WordleItem: React.FC<WordleItemProps> = (
    {wordAnswer, wordChosen, done}
) => {
    console.log("chosen here:", wordChosen);
    console.log("done value", done);
    return (
    <div  className='wordleRow'>
    {wordAnswer.split('').map((item, index) =>

    (
        
    done[index] ? 
        (<div key={index} className='wordleItem'>
                <span className='font'> {wordChosen.split('')[index]} </span>
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