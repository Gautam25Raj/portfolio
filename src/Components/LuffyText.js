import { motion, useScroll, useTransform } from 'framer-motion';
import './LuffyText.css';

const LuffyText = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.45, 0.9], [-1000, -1200]);

  return (
    <div className="luffy-text-container">
      <motion.div style={{ x }} className="transition-base no-select">
        <div className="luffy-text luffy-text-border">
          - Don't you dare make - Don't you dare make - Don't you dare make -
          Don't you dare make
        </div>
        <div className="luffy-text luffy-text-color">
          - my navigator cry! - my navigator cry! - my navigator cry! - my
          navigator cry! - my navigator cry! -
        </div>
        <div className="luffy-text luffy-text-border">
          - Monkey D. - Monkey D. - Monkey D. - Monkey D. - Monkey D. - Monkey
          D. -
        </div>
        <div className="luffy-text luffy-text-color">
          - Luffy - Luffy - Luffy - Luffy - Luffy - Luffy - Luffy - Luffy -
          Luffy - Luffy -
        </div>
      </motion.div>
    </div>
  );
};

export default LuffyText;
