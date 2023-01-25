import { useEffect } from 'react';
import TagCloud from 'TagCloud';

import './TextSphere.css';

const TextShpere = () => {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const texts = [
        'HTML5',
        'CSS3',
        'SASS',
        'JavaScript',
        'React',
        'NodeJS',
        'ES6',
        'Git',
        'GitHub',
        'BEM',
        'Java',
        'MongoDB',
        'Mongoose',
        'ExpressJS',
        'NPM',
        'Php',
        'HTML5',
        'CSS3',
        'SASS',
        'JavaScript',
        'React',
        'NodeJS',
        'ES6',
        'Git',
        'GitHub',
        'BEM',
        'Java',
        'MongoDB',
        'Mongoose',
        'ExpressJS',
        'NPM',
        'Php',
      ];

      const options = {
        radius: 400,
        maxSpeed: 'normal',
        initSpeed: 'slow',
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;
