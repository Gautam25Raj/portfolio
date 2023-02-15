import './Elements.css';

const Elements = (props) => {
  return (
    <span className="element span-block no-select">&lt;{props.name}&gt;</span>
  );
};

export default Elements;
