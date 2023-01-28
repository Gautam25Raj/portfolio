import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

import './HoverBounce.css';

const HoverBounce = (props) => {
  const controls = useAnimationControls();
  const [isPlay, setPlay] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .75, 1)',
        'scale3d(.75, 1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      tranition: {
        times: [0, 0.8, 1.2, 2.0, 2.7, 3.0],
      },
    });
    setPlay(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlay) {
          rubberBand();
        }
      }}
      className={props.className}
      onAnimationComplete={() => setPlay(false)}
    >
      {props.children}
    </motion.span>
  );
};

export default HoverBounce;
