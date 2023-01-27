import { useEffect } from 'react';
import TagCloud from 'TagCloud';

import './TextSphere.css';

const TextShpere = (props) => {
  console.log(props.container);
  useEffect(() => {
    return () => {
      TagCloud(props.container, props.texts, props.options);
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
