// src/components/BlurText.jsx

import React, { useEffect, useState } from 'react';

const BlurText = ({
  text,
  delay = 100,
  animateBy = 'words', // or 'letters'
  direction = 'top',
  onAnimationComplete,
  className = '',
  style = {}
}) => {
  const [visible, setVisible] = useState([]);

  const units = animateBy === 'letters' ? [...text] : text.split(' ');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisible((prev) => [...prev, i]);
      i++;
      if (i >= units.length) {
        clearInterval(interval);
        if (onAnimationComplete) onAnimationComplete();
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay, units.length, onAnimationComplete]);

  const getAnimationStyle = (index) => {
    const isVisible = visible.includes(index);
    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translateY(0)'
        : direction === 'top'
        ? 'translateY(-20px)'
        : 'translateY(20px)',
      transition: 'all 0.4s ease',
    };
  };

  return (
    <div className={`flex flex-wrap justify-center ${className}`} style={style}>
      {units.map((unit, index) => (
        <span
          key={index}
          className="inline-block whitespace-pre"
          style={getAnimationStyle(index)}
        >
          {unit + (animateBy === 'words' ? ' ' : '')}
        </span>
      ))}
    </div>
  );
};

export default BlurText;