import { useState, useEffect } from 'react'
import { adj } from './adj';

const RandomAdj = () => {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(true);
  const [adjectives] = useState(adj);
  const [currentAdj, setCurrentAdj] = useState(adjectives[count]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing) {
        setTyped(currentAdj.slice(0, typed.length + 1));
        if (typed.length == currentAdj.length) {
          setTimeout(() =>{setTyping(false);},2000);
        }
      }
      if (!typing) {
        setTyped(currentAdj.slice(0, typed.length - 1));
        if (typed.length == 0) {
          setTyping(true);
          if (count == adjectives.length - 1) setCount(0);
          else setCount(count + 1);
          setTyped("");
          setCurrentAdj(adjectives[count]);
        }
      }
    },
      50);
    return () => {
      clearTimeout(timeout);
    };
  }, [typed,typing,adjectives,count]);

  return (
    typed
  );
}


export default RandomAdj