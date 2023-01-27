import TextShpere from './TextSphere';

const TextSphereData = () => {
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

  return <TextShpere container={container} texts={texts} options={options} />;
};

export default TextSphereData;
