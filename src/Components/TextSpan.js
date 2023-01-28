import HoverBounce from './HoverBounce';

import './HoverBounce.css';

const TextSpan = (props) => {
  const sentence = props.text.split('');
  console.log(props.className);
  return sentence.map((letter, index) => (
    <HoverBounce
      key={'skills-' + letter + '-' + index}
      className={props.className}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </HoverBounce>
  ));
};

export default TextSpan;
