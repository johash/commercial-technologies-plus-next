import classes from "./FaqBody.module.scss";
import QACard from "./QACard/QACard";
import { motion } from "framer-motion";

const FaqBody = () => {
  const container = {
    hidden: { opacity: 0, top: 60 },
    show: {
      opacity: 1,
      top: 30,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, top: -50 },
    show: { opacity: 1, top: 0 },
  };

  return (
    <section className={classes.FaqBody}>
      <div className={classes.Container}>
        <div className={classes.QASection}>
          <motion.div
            className={classes.Section}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={classes.Section}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
            <motion.div variants={item}>
              <QACard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                answer="Etiam pretium sollicitudin cursus. Nam justo mi, eleifend quis ornare sed, mollis non lorem. Sed commodo velit eu augue porttitor, sit amet facilisis libero placerat. Vestibulum augue erat, vestibulum eu fermentum eget, tincidunt non tortor."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
