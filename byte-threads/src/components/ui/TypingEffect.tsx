'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  startDelay?: number;
}

export default function TypingEffect({
  text,
  speed = 50,
  className = '',
  showCursor = true,
  startDelay = 500
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, currentIndex === 0 ? startDelay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, startDelay, isComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-1 h-[0.9em] bg-white ml-1 ${
            showCursorBlink ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100`}
        />
      )}
    </span>
  );
}