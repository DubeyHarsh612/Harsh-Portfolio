import React, { useEffect, useState, useMemo } from 'react';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const phrases = useMemo(() => ['STUDENT...', 'Web developer...', 'Web designer...'], []); // Add your phrases here
  const typingSpeed = 100; // Typing speed in milliseconds
  const pauseBetweenPhrases = 1500; // Pause duration between phrases in milliseconds

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    let isTyping = true;

    const updateText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isTyping) {
        if (currentCharacterIndex <= currentPhrase.length) {
          setText(currentPhrase.substring(0, currentCharacterIndex));
          currentCharacterIndex++;
          setTimeout(updateText, typingSpeed);
        } else {
          isTyping = false;
          setTimeout(() => {
            isTyping = true;
            currentCharacterIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setText('');
            setTimeout(updateText, typingSpeed);
          }, pauseBetweenPhrases);
        }
      } else {
        if (currentCharacterIndex > 0) {
          setText(currentPhrase.substring(0, currentCharacterIndex));
          currentCharacterIndex--;
          setTimeout(updateText, typingSpeed);
        } else {
          isTyping = true;
          setText('');
          setTimeout(updateText, typingSpeed);
        }
      }
    };

    updateText();
  }, [phrases]);

  return (
    <div className="col d-flex justify-content-center">
      <div className="decs tw">
        <span style={{ borderRight: '1px solid #666', animation: 'blink 2s', paddingRight: '3px' , color:'black'}}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default TypewriterText;
