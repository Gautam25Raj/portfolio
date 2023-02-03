import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import './Cursor.css';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: 'difference',
    },
    projectImg: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: '#fff',
    },
  };

  const onProjectImgEnter = () => {
    setCursorVariant('projectImg');
  };

  const onLeave = () => {
    setCursorVariant('default');
  };

  return (
    <>
      {ReactDOM.createPortal(
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />,
        document.getElementById('root-cursor')
      )}
    </>
  );
};

export default Cursor;
