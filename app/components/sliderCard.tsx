import React, { FunctionComponent } from "react";
import styles from "../styles/components/sliderCard.module.scss";
import Image from "next/image";

type SliderCardProps = {
  title: string;
  banner: string;
  logo: string;
};

const SliderCard: FunctionComponent<SliderCardProps> = ({
  title,
  banner,
  logo,
}) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${banner})` }}>
      <div className="flex items-center justify-center gap-4">
        <Image width={80} height={80} src={logo} alt={title} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default SliderCard;
