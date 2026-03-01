/**
 * TypingEffect Component
 * -----------------------
 * Cycles through an array of words with a typewriter animation.
 *
 * Behavior:
 *   1. Types out each word character by character
 *   2. Pauses when word is fully typed
 *   3. Deletes the word character by character
 *   4. Moves to the next word in the list
 *   5. Loops infinitely
 *
 * Props:
 *   words    - Array of strings to cycle through
 *   typingMs - Delay between typing each character (default: 100ms)
 *   deleteMs - Delay between deleting each character (default: 60ms)
 *   pauseMs  - Pause after word is fully typed (default: 2000ms)
 */
"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingEffectProps {
  words: string[];
  typingMs?: number;
  deleteMs?: number;
  pauseMs?: number;
}

export default function TypingEffect({
  words,
  typingMs = 100,
  deleteMs = 60,
  pauseMs = 2000,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Get the current target word */
  const currentWord = words[wordIndex % words.length];

  const tick = useCallback(() => {
    if (isDeleting) {
      /* Remove one character */
      setText((prev) => prev.slice(0, -1));
    } else {
      /* Add one character */
      setText((prev) => currentWord.slice(0, prev.length + 1));
    }
  }, [currentWord, isDeleting]);

  useEffect(() => {
    /* Determine delay based on current state */
    let delay = isDeleting ? deleteMs : typingMs;

    /* If word is fully typed, pause then start deleting */
    if (!isDeleting && text === currentWord) {
      delay = pauseMs;
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    /* If word is fully deleted, move to next word */
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord, tick, typingMs, deleteMs, pauseMs, words.length]);

  return (
    <span>
      {text}
      <span className="typing-cursor" />
    </span>
  );
}
