import React, { useEffect, useState } from "react";
import styles from "./comment.module.css";

const CommentList = ({ comments, visible = 1 }) => {
  const [visibleComments, setVisibleComments] = useState(visible);
  const showMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 5);
  };
  return (
    <div className={styles["comment-wrapper"]}>
      {comments.slice(0, visibleComments).map((comment) => (
        <div className={styles["comment"]} key={comment.id}>
          <strong>{comment.name}</strong> - {comment.email}
          <br />
          {comment.body}
        </div>
      ))}
      {visibleComments < comments.length && (
        <div className="loader-wrapper">
          <button className="btn-default small dark" onClick={showMore}>
            Load Comments
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentList;
