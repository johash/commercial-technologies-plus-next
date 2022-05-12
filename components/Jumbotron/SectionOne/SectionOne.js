import react from "react";
import classes from "./SectionOne.module.scss";
import Image from "next/image";
import sectionOneImage from "../../../public/assets/003.png";

const SectionOne = () => {
  const [textContentVisible, setTextContentVisibility] = react.useState(true);

  const headings = [
    "Innovation + Commercial Value Raise Potential Products",
    "Build Your SaaS Platform with A Maestro",
    "Commercialize Your Ideas",
  ];
  const descs = [
    "We drive you towards valuations",
    "Skyrocket your ROI to an exponential growth",
    "We build commercial platforms",
  ];

  const [index, setIndex] = react.useState(0);

  let ref = null;

  react.useEffect(() => {
    hide();
  }, []);

  const hide = () => {
    clearTimeout(ref);
    ref = setTimeout(() => {
      setTextContentVisibility(false);
      show();
      setTimeout(() => {
        changeContent();
      }, 1000);
    }, 5000);
  };

  const show = () => {
    setTimeout(() => {
      setTextContentVisibility(true);
      hide();
    }, 2000);
  };

  const changeContent = () => {
    setIndex((i) => {
      return i + 1 === headings.length ? 0 : i + 1;
    });
  };

  const textContentStyles = [classes.TextContent];

  if (!textContentVisible) {
    textContentStyles.push(classes.TextContentHide);
  }

  return (
    <div className={classes.SectionOne}>
      <div className={textContentStyles.join(" ")}>
        <h1>{headings[index]}</h1>
        <p>{descs[index]}</p>
        <div
          className={[
            classes.ButtonContainer,
            textContentVisible ? {} : classes.ButtonContainerHide,
          ].join(" ")}
        >
          <button className={[classes.Btn, classes.BtnSecondary].join(" ")}>
            Hire Commercializers
          </button>
        </div>
      </div>
      <div className={classes.ImageContainer}>
        <div>
          <Image
            src={sectionOneImage}
            layout="fixed"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className={classes.SidePart}>
        <Image
          src="/assets/sidepart2.png"
          layout="fixed"
          objectFit="contain"
          height={402}
          width={176}
        />
      </div>
    </div>
  );
};

export default SectionOne;
