import { TagCloud } from '@frank-mayer/react-tag-cloud';

import './TextSphere.css';

const TextShpere = (props) => (
  <div className="text-shpere">
    <TagCloud
      options={() => props.options}
    >
      {props.texts}
    </TagCloud>
  </div>
);

export default TextShpere;
