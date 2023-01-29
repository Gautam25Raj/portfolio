import './VisitSite.css';

const VisitSite = (props) => {
  return (
    <a href={props.visit} className="heading-color visit-site">
      <span className="visit-site-text">Visit Site</span>
    </a>
  );
};

export default VisitSite;
