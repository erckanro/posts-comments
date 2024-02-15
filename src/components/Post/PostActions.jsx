import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import styles from "./post.module.css";

const ActionWrapper = ({ icon }) => {
  const [clicked, setClicked] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    if (icon === faHeart) {
      const newRandomNumber = Math.floor(Math.random() * 10) + 1;
      setRandomNumber(newRandomNumber);
    }
  }, [icon]);

  const handleClick = () => {
    setClicked(!clicked);
    if (icon === faHeart) {
      setRandomNumber((prevNumber) => prevNumber + (clicked ? -1 : 1));
    }
  };

  return (
    <div
      className={`${styles["action-wrapper"]} ${clicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        color={clicked ? "#FF5733" : "#000"}
      />
      <span className={styles["count"]}>
        {" "}
        {icon === faHeart ? randomNumber : 0}
      </span>
    </div>
  );
};

const PostActions = ({ comments }) => {
  return (
    <div className={styles["post-actions"]}>
      <ActionWrapper icon={faHeart} />
      <div className={styles["action-wrapper"]}>
        <FontAwesomeIcon icon={faComment} size="2x" />
        <span className={styles["count"]}> {comments.length}</span>
      </div>
    </div>
  );
};

export default PostActions;
