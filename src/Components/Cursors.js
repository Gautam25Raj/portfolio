import AnimatedCursor from 'react-animated-cursor';

const Cursors = () => {
  return (
    <AnimatedCursor
      innerSize={32}
      outerSize={62}
      color="255, 255, 255"
      outerAlpha={0.1}
      innerScale={2.2}
      outerScale={0}
      clickables={['a', 'button', '.link']}
      hasBlendMode={true}
      innerStyle={{ mixBlendMode: 'exclusion' }}
    />
  );
};

export default Cursors;
