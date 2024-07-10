import React, { FunctionComponent } from "react";
import styles from "../styles/components/slider.module.scss";

type SliderProps = {
  elements: JSX.Element[];
};

const Slider: FunctionComponent<SliderProps> = ({ elements }) => {
  return <div className={styles.slider}>{elements}</div>;
};

export default Slider;
