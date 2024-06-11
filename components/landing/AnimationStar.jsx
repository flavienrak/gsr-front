"use client";

import React, { useRef } from "react";
import styles from "../../styles/AnimationStar.module.css";

const AnimationStar = () => {
  const conteneurRef = useRef(null);

  return (
    <div className={styles.container}>
      <div ref={conteneurRef} className={styles.stars}>
        {Array(200)
          .fill()
          .map((_, index) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            return (
              <div
                key={index}
                className={styles.star}
                style={{ top: `${top}%`, left: `${left}%` }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default AnimationStar;
