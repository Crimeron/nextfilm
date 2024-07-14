import React from "react";

import styles from "./styles.module.css";

function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading };