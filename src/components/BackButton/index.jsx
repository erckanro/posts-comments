import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./back-button.module.css";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div onClick={handleBack} className={styles["back"]}>
      <span className={styles["icon"]}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </span>
      <span className={styles["text"]}>Back to Posts</span>
    </div>
  );
};

export default BackButton;
