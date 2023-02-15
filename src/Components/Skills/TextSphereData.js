import TextShpere from './TextSphere';

const TextSphereData = () => {
  let texts = [
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

  let currentRadius = 500;
  if (window.innerWidth < 1560) currentRadius = 400;
  if (window.innerWidth < 900) currentRadius = 250;

  if (window.innerWidth < 500) {
    currentRadius = 200;
    texts = [
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
  }

  const options = {
    radius: currentRadius,
    maxSpeed: 'fast',
    initSpeed: 'slow',
  };

  return <TextShpere texts={texts} options={options} />;
};

export default TextSphereData;
